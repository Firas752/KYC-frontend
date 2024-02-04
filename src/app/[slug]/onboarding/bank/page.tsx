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
	Image,
	Button,
	Center
} from "@chakra-ui/react";
import React, { ChangeEvent, useEffect, useState } from "react";
import { MobileButton } from "@/components/atom/button";
import { LabeledInput } from "@/components/atom/input";
import { useRouter } from "next/navigation";
import { kyc_personal_info_schema } from "@/validations";
import { useFormik } from "formik";
import { useStore } from "@/zustand/store";
import { PhoneNumberUtil } from "google-libphonenumber";
import { ClipLoader } from 'react-spinners';
import { ChevronRightIcon } from '@chakra-ui/icons';

import axios from 'axios';

import {
	PhoneInput,
	defaultCountries,
	parseCountry,
} from "react-international-phone";
import "react-international-phone/style.css";



const Bank = () => {
	const router = useRouter();
	const [isLoading, setIsLoading] = useState(false);
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

	 // The empty array means this effect will only run once after the component mounts
	
	  // ...existing code...

	


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


	  
	  // State variable to hold the selected item's id
	  const [selectedItemId, setSelectedItemId] = useState(localStorage.getItem('selectedItemId') || '');
	  
	  // Save the selected item's id in the local storage whenever it changes
	  useEffect(() => {
		localStorage.setItem('selectedItemId', selectedItemId);
	  }, [selectedItemId]);
	
	  const categories = [
		{
			icon: "/images/wallet.19e83025.svg",
			title: "E-Wallet",
			items: [
			  { id: 11, name: "GoPay" },
			  { id: 12, name: "OVO" },
			  { id: 33, name: "ShopeePay" },
			  { id: 46, name: "Dana" },
			],
		  },
		  {
			icon: "/images/mobile-banking.f0bc274d.svg",
			title: "Mobile Banking",
			items: [
			  { id: 16, name: "BRImo" },
			  { id: 17, name: "Livin' by Mandiri" },
			  { id: 18, name: "PermataMobile X" },
			  { id: 19, name: "D-Mobile" },
			  { id: 34, name: "Bank Syariah Indonesia Mobile" },
			  { id: 35, name: "OCBC NISP ONe Mobile" },
			  { id: 38, name: "MyBCA Mobile Banking" },
			],
		  },
		  {
			icon: "/images/internet-banking.b0e887ea.svg",
			title: "Internet Banking",
			items: [
				{ id: 2, name: "KlikBCA Internet Banking" },
				{ id: 3, name: "Livin' by Mandiri" },
				{ id: 4, name: "BNI Internet Banking" },
				{ id: 5, name: "BRI Internet Banking" },
				{ id: 8, name: "PermataNet" },
				{ id: 9, name: "Danamon Online Banking" },
				{ id: 25, name: "OCBC NISP Web Banking" },
				{ id: 26, name: "Bank Syariah Indonesia" },
				{ id: 27, name: "CIMB" },
				{ id: 37, name: "MyBCA Internet Banking" },
				{ id: 39, name: "Muamalat" },
			  ],
		  },
	  ];
	  
	  return (
		<SimpleLayout heading="Choose your account">
		  {categories.map((category, categoryIndex) => (
			<div key={categoryIndex} style={{ border: '1px solid #000', margin: '10px', padding: '10px', borderRadius: '15px' }}>
			  <Flex className="title-institution-category" alignItems="center">
				<Image src={category.icon} />
				<Text className="brick-subtitle2" fontWeight="bold">{category.title}</Text>
			  </Flex>
			  {category.items.map((item, itemIndex) => (
				<Flex
				  key={itemIndex}
				  onClick={() => {
					localStorage.setItem('selectedItemId', item.id.toString());
					router.push(`employee`);
				  }}
				  alignItems="center"
				  justifyContent="space-between"
				  border="1px solid #000"
				  borderTop="none"  // Remove top border
				  borderLeft="none"  // Remove left border
				  borderRight="none"  // Remove right border
				  p={2}
				  _hover={{ bg: 'gray.200' }}
				>
				  <Box className="institution-name-wrapper">
					<Text className="brick-body2">{item.name}</Text>
				  </Box>
				  <ChevronRightIcon color="#C9C9C9" />
				</Flex>
			  ))}
			</div>
		  ))}

<Center flexDirection="column">
<Text mt={4}>If you don&apos;t see your institution, you can:</Text>
      <Button
  mt={2}
  bg="#5046e3"  // Change the background color to purple
  borderRadius="15px"  // Make the button more rounded // Add a hover effect
  textColor={"white"}
  onClick={() => {
    router.push('documents');  // Redirect to the upload bank statement page
  }}
>
  Upload your bank statement
</Button>
    </Center>

	<Box height="100px" /> 
		</SimpleLayout>


	  );



};


export default Bank;
