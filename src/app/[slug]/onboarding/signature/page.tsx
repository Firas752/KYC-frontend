"use client";
import SimpleLayout from "@/layouts/user/simpleLayout";
import {
	Box,
	Text,
	Flex,
	Checkbox,
	useToast,
	useDisclosure,
} from "@chakra-ui/react";
import React, { ChangeEvent, useEffect, useState } from "react";
import { DefaultButton, MobileButton } from "@/components/atom/button";
import { useRouter, useParams } from "next/navigation";
import { useStore } from "@/zustand/store";
import { useMutation } from "@tanstack/react-query";
import { axiosInstance } from "@/config/axios";
import { AxiosError } from "axios";
import ModalContainer from "@/layouts/popups/modalContainer";
import { PiSealCheckFill } from "react-icons/pi";
import { withQueryClient } from "@/HOC/withQueryClient";
import Link from "next/link";

const checkMarkIcon = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="34"
		height="32"
		viewBox="0 0 34 32"
		fill="none"
	>
		<path
			d="M10.4255 16L14.5957 20L22.9362 12M30.5816 16C30.5816 23.3638 24.358 29.3333 16.6809 29.3333C9.0037 29.3333 2.78014 23.3638 2.78014 16C2.78014 8.63619 9.0037 2.66666 16.6809 2.66666C24.358 2.66666 30.5816 8.63619 30.5816 16Z"
			stroke="#1967FD"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</svg>
);

const Signature = () => {
	const router = useRouter();
	const toast = useToast();
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [disabled, setDisabled] = useState<boolean>(true);
	const { updateChecklistData } = useStore();
	const { selectedCountry } = useStore();
	const [selectedState, setSelectedState] = useState<string>("");
	// const goToNext = () => router.push("task");
	const { kycData } = useStore();
	//@ts-ignore
	const { slug } = useParams();
	const url = `/packages/${slug}/kyc-submissions`;

	
	// const handleSubmission = () => {
	// 	return axiosInstance.post(url, kycData);
	// };

	// const kycMutation = useMutation({
	// 	mutationKey: ["create_mutation"],
	// 	mutationFn: handleSubmission,
	// 	onSuccess: (response) => {
	// 		toast({
	// 			status: "success",
	// 			title: "Information Submitted",
	// 			description: "Proceed to verify ID",
	// 			position: "top",
	// 		});
	// 		const userResponse = response?.data;
	// 		updateChecklistData(userResponse);
	// 		// onOpen();
	// 		router.push("task");
	// 	},
	// 	onError: (err: AxiosError) => {
	// 		//@ts-ignore
	// 		const errMsg = err?.response?.data?.message;
	// 		toast({
	// 			status: "error",
	// 			title: "Oppp!!!",
	// 			description: errMsg,
	// 			position: "top",
	// 		});
	// 	},
	// });

	// const handleMutation = () => kycMutation.mutate();
	const handleMutation = () => {
		// Get stored values from local storage
		let storedValues: any = localStorage.getItem('formValues');

		// Parse stored values back into an object
		storedValues = storedValues ? JSON.parse(storedValues) : {};

		// Add new values
		storedValues.signature_link = url; // replace with your actual URL

		// Save updated values back to local storage
		localStorage.setItem('formValues', JSON.stringify(storedValues));
		router.push("task");
	};


	const [scopes, setScopes] = useState([
		{
			content: "You have a salary of at least $500",
			checked: false,
		},
		{
			content: `You will not violate your visa terms and stay beyond 3 months from day of arrival`,
			checked: false,
		},
		{
			content: `You will be liable to charges and penalty fees in your home country if you violate the visa terms`,
			checked: false,
		},
		{
			content: `This is a legally binding document in your home country.`,
			checked: false,
		},
	]);

	//handle checkboxes
	const handleCheck = (index: number) => (e: ChangeEvent<HTMLInputElement>) => {
		const newScopes = [...scopes];
		newScopes[index].checked = e.target.checked;

		setScopes(newScopes);

		const allBoxesChecked = newScopes.every((scope) => scope.checked);
		setDisabled(!allBoxesChecked);
	};

	useEffect(() => {
		const allBoxesChecked = scopes.every((scope) => scope.checked);
		setDisabled(!allBoxesChecked);
	}, [scopes]);
	return (
		<SimpleLayout
			heading="Signature"
			description={`You will sign a document acknowledging and confirming the followings
        sets of information.`}
		>
			<Box>
				{scopes.map((_, key) => {
					return (
						<Box
							display={"flex"}
							gap="1em"
							alignItems="center"
							justifyContent={"space-between"}
							key={key}
							my="2em"
						>
							<Box>{checkMarkIcon}</Box>
							<Box w={"80%"}>
								<Text color={"brand.dark_text"}>{_?.content}</Text>
							</Box>
							<Checkbox size="lg" onChange={handleCheck(key)} />
						</Box>
					);
				})}
			</Box>

			<Flex w="100%" gap="1em" my="1.5em">
				<MobileButton
					w="100%"
					bg="none"
					color="black"
					onClick={() => router.back()}
				>
					Back
				</MobileButton>
				<MobileButton
					w="100%"
					// onClick={handleMutation}
					// isLoading={kycMutation.isPending}
					onClick={() => {
						const selectedCountry = localStorage.getItem('selectedCountry');
						// if (selectedCountry === "Indonesia") {
						//   // Do something when the selected country is Indonesia
							
						//   	router.push("task"); // replace "/next-page" with the path of your next page
						// 	  console.log(selectedCountry)
						// 	  console.log()
						// }
						
						//  else {
						//   // Do something else when the selected country is not Indonesia
						//   handleMutation();
						// }
						handleMutation();
					  }}
					loadingText="Please wait..."
					isDisabled={disabled}
				>
					Submit
				</MobileButton>
			</Flex>
		</SimpleLayout>
	);
};

export default withQueryClient(Signature);
