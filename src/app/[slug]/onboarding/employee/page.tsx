//@ts-nocheck
"use client";
import SimpleLayout from "@/layouts/user/simpleLayout";
import {
	Flex,
	Box,
	FormControl,
	FormLabel,
	FormErrorMessage,
	FormErrorIcon,
	Text,
} from "@chakra-ui/react";
import React, { ChangeEvent, useEffect, useState } from "react";
import { MobileButton } from "@/components/atom/button";
import { LabeledInput } from "@/components/atom/input";
import { useRouter } from "next/navigation";
import { kyc_personal_info_schema } from "@/validations";
import { useFormik } from "formik";
import { useStore } from "@/zustand/store";
import { PhoneNumberUtil } from "google-libphonenumber";

import {
	PhoneInput,
	defaultCountries,
	parseCountry,
} from "react-international-phone";
import "react-international-phone/style.css";

const Employee = () => {
	const router = useRouter();
	const { updateKycData, kycData } = useStore();
	const nationality = kycData.nationality;
	const [disabled, setDisabled] = useState(false);
	const [phoneNumberError, setPhoneNumberError] = useState(false);

	const check_nationality =
		nationality === "Indonesia" || nationality === "indonesia";

	const isNigerian = nationality === "Nigeria" || nationality === "nigeria";

	const { email, phone_number, bvn } = kycData;

	const payload = {
		email: email || "",
		phone_number: phone_number || "",
	};

	if (isNigerian) {
		payload.bvn =
			typeof bvn === "string" || typeof bvn === "number" ? String(bvn) : "";
	}

	useEffect(() => {
		const fetchData = async () => {
		  try {
			const response = await axios.get('/api/getAuthToken');  
			localStorage.setItem('responseData', JSON.stringify(response.data.data.access_token));
			const publicAccessToken = response.data.data.access_token;
			
			localStorage.setItem('publicAccessToken', publicAccessToken.toString());
			if (publicAccessToken) {
			  console.log(publicAccessToken);
	
			  const secondResponse = await axios.post('/api/getRedirectRefId', {
				accessToken: publicAccessToken,
				userId: "",
			  });
			  
			  const redirectRefId = secondResponse.data.data.redirectRefId;
			  console.log(redirectRefId)
			  const clientid = secondResponse.data.data.clientId;
			  localStorage.setItem('redirectRefId', redirectRefId.toString());
			  localStorage.setItem('clientid', clientid.toString());
			  console.log(secondResponse)
	
			  // const instlist_response = await axios.post('/api/instlist', {
			  //   publicAccessToken
			  // });
			  // console.log(instlist_response.data);
			} else {  
			  console.log('publicAccessToken is undefined');
			}
		  } catch (error) {
			console.log(error);
		  }
		};
	
		fetchData();
	  }, []); // The empty array means this effect will only run once after the component mounts
	
	  // ...existing code...
	
	  



	const formik = useFormik({
		initialValues: payload,
		validateOnChange: true,
		validateOnBlur: true,
		onSubmit: async (values, { setErrors }) => {
			try {
				await kyc_personal_info_schema.validate(values, { abortEarly: false });
				updateKycData(values);

				router.push("signature");
			} catch (validationErrors) {
				const errors = {};
				validationErrors.inner.forEach((error) => {
					const fieldName = error.path;
					errors[fieldName] = error.message;
				});
				setErrors(errors);
				console.log(formik.errors);
			}
		},
	});

	const pickCountryCode = check_nationality ? "id" : "ng";
	const goToBack = () => router.back();

	const customLabelStyle = {
		position: "absolute",
		top: "-13px",
		color: "#828282",
		zIndex: 99999,
		backgroundColor: "#fff",
		padding: "0 em",
		width: "fit-content",
		marginLeft: "1.7em",
	};


	const handlePhone = (e: ChangeEvent<HTMLInputElement>) => {
		setPhoneNumber(e);
		formik.setFieldValue("phone_number", e);
		setPhoneNumberError(!isPhoneValid(e));
	};

	const handleBvn = (e: ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value.toString();
		formik.setFieldValue("bvn", value);
	};
	const isValidate = isPhoneValid(phoneNumber);

	useEffect(() => {
		setDisabled(!isValidate);
	}, [phoneNumber, isValidate]);

	return (
		<SimpleLayout heading="Personal Infomation">
			<form onSubmit={formik.handleSubmit}>
				<Box pos="relative">
					<LabeledInput
						type="email"
						label="Email"
						name="email"
						value={formik.values.email}
						onChange={formik.handleChange}
						isInvalid={formik.errors.email ? true : false}
						errorMessage={formik.errors.email && formik.errors.email}
					/>
					<LabeledInput
						type="phone"
						label="Phone Number"
						name="phone_number"
						value={formik.values.email}
						onChange={formik.handleChange}
						isInvalid={formik.errors.email ? true : false}
						errorMessage={formik.errors.email && formik.errors.email}
					/>

					{!check_nationality && (
						<LabeledInput
							type="number"
							label="BVN"
							name="bvn"
							value={formik.values.bvn}
							onChange={handleBvn}
							isInvalid={formik.errors.bvn ? true : false}
							errorMessage={formik.errors.bvn && formik.errors.bvn}
							isRequired
						/>
					)}


					<Flex w="100%" gap="1em" mt="1em" position={"absolute"} bottom="-7em">
						<MobileButton w="100%" bg="none" color="black" onClick={goToBack}>
							Back
						</MobileButton>
						<MobileButton type="submit" w="100%" isDisabled={disabled}>
							Next
						</MobileButton>
					</Flex>
				</Box>
			</form>
		</SimpleLayout>
	);
};


export default Employee;
