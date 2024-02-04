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

const phoneUtil = PhoneNumberUtil.getInstance();

const isPhoneValid = (phone: string) => {
	try {
		return phoneUtil.isValidNumber(phoneUtil.parseAndKeepRawInput(phone));
	} catch (error) {
		return false;
	}
};

const PersonalInfo = () => {
	const router = useRouter();
	const { updateKycData, kycData } = useStore();
	const nationality = kycData.nationality;
	const [disabled, setDisabled] = useState(false);
	const [phoneNumberError, setPhoneNumberError] = useState(false);

	const check_nationality =
		nationality === "Indonesia" || nationality === "indonesia";

	const isNigerian = nationality === "Nigeria" || nationality === "nigeria";

	// const { email, phone_number, last_name, first_name, address, bvn } = kycData;
	const { email, phone_number, last_name, first_name, bvn } = kycData;

	const payload = {
		email: email || "",
		phone_number: phone_number || "",
		first_name: first_name || "",
		last_name: last_name || "",
		// address: nationality,
		// signature_link: "",
	};

	if (isNigerian) {
		payload.bvn =
			typeof bvn === "string" || typeof bvn === "number" ? String(bvn) : "";
	}

	const formik = useFormik({
		initialValues: payload,
		// validateOnChange: true,
		// validateOnBlur: true,
		validateOnChange: false,
		validateOnBlur: false,
		onSubmit: async (values, { setErrors }) => {
			try {
				await kyc_personal_info_schema.validate(values, { abortEarly: false });
				// updateKycData(values);
				
				console.log(values);
				localStorage.setItem('formValues', JSON.stringify(values));
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

	const [phoneNumber, setPhoneNumber] = useState(kycData.phone_number || "");

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
						type="text"
						label="First Name"
						name="first_name"
						value={formik.values.first_name}
						onChange={formik.handleChange}
						isInvalid={formik.errors.first_name ? true : false}
						errorMessage={formik.errors.first_name && formik.errors.first_name}
					/>
					<LabeledInput
						type="text"
						label="Last Name"
						name="last_name"
						value={formik.values.last_name}
						onChange={formik.handleChange}
						isInvalid={formik.errors.last_name ? true : false}
						errorMessage={formik.errors.last_name && formik.errors.last_name}
					/>
					<LabeledInput
						type="email"
						label="Email"
						name="email"
						value={formik.values.email}
						onChange={formik.handleChange}
						isInvalid={formik.errors.email ? true : false}
						errorMessage={formik.errors.email && formik.errors.email}
					/>

					<FormControl
						isInvalid={formik.errors.phone_number ? true : false}
						zindex={99999}
					>
						<FormLabel htmlFor="input" style={customLabelStyle}>
							Phone number
						</FormLabel>
						<PhoneInput
							defaultCountry={pickCountryCode}
							value={formik.values.phone_number}
							showDisabledDialCodeAndPrefix={true}
							onChange={handlePhone}
							inputStyle={{
								width: "100%",
								padding: "1.91em 1em",
								border: `${formik.errors.phone_number ? "2px solid red" : ""}`,
							}}
						/>

						{!phoneNumberError && (
							<Box mt="0.5em">
								<Text color={"green"}>Phone number is valid</Text>
							</Box>
						)}
					</FormControl>

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

					{/* <Box position={"relative"}>
						<LabeledInput
							type="text"
							label="Address"
							name="address"
							onChange={formik.handleChange}
							value={formik.values.address || nationality}
							isInvalid={formik.errors.address ? true : false}
							errorMessage={formik.errors.address && formik.errors.address}
						/>
					</Box> */}

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

export default PersonalInfo;
