"use client";
import { Box, Flex, Text } from "@chakra-ui/react";
import React, { FC } from "react";
import { FcCancel } from "react-icons/fc";

interface CheckView {
	passport_check: string;
	employment_check: string;
	account_check: string;
	email_check: string;
	salary_check: string;
	address_check: string;
}

const verificationIcon = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="23"
		height="22"
		viewBox="0 0 29 28"
		fill="none"
	>
		<path
			d="M8.46152 14L12.309 17.9L20.004 10.1M27.0578 14C27.0578 21.1797 21.3158 27 14.2328 27C7.14972 27 1.40776 21.1797 1.40776 14C1.40776 6.8203 7.14972 1 14.2328 1C21.3158 1 27.0578 6.8203 27.0578 14Z"
			stroke="#01C22C"
			stroke-width="2"
		/>
	</svg>
);

const NotVerified = (
	<Box display={"flex"} gap=".5em" alignItems={"center"}>
		<FcCancel size="2em" />
		<Text fontWeight={600} lineHeight={"28px"}>
			Not Verified
		</Text>
	</Box>
);

const Verified = (
	<Box
		display={"flex"}
		gap=".3em"
		fontWeight={600}
		lineHeight={"28px"}
		alignItems={"center"}
		my=".3em"
	>
		{verificationIcon} <Text>Verified</Text>
	</Box>
);

const lowRisk = (
	<Box
		display={"flex"}
		gap=".3em"
		fontWeight={600}
		lineHeight={"28px"}
		alignItems={"center"}
		my=".3em"
	>
		{verificationIcon} <Text>Low Risk</Text>
	</Box>
);

const yes = (
	<Box
		display={"flex"}
		gap=".3em"
		fontWeight={600}
		lineHeight={"28px"}
		alignItems={"center"}
		my=".3em"
	>
		{verificationIcon} <Text>Yes</Text>
	</Box>
);

const isEmpty = (value: string | null | undefined) => {
	return value == null || (typeof value === "string" && value.trim() === "");
};

const ChecksView: FC<CheckView> = ({
	passport_check,
	address_check,
	salary_check,
	employment_check,
	email_check,
	account_check,
}) => {
	return (
		<Box>
			

			<Flex gap={["1em", "3em"]} flexDir={["column-reverse", "row"]}>
				<Box
					w={"100%"}
					display={"flex"}
					gap="1em"
					justifyContent={"space-between"}
					flexWrap="wrap"
				>
					<Box w="190px" display={"flex "} flexDir={"column"} gap="2em">
						<Box>
							<Text
								color="#666D76"
								fontSize={["18px", "15px"]}
								fontWeight={600}
								lineHeight={"28px"}
							>
								Passport Verification
							</Text>
							{/* {!isEmpty(passport_check) ? NotVerified : Verified} */}
							{lowRisk}
						</Box>

						<Box>
							<Text
								color="#666D76"
								fontSize={["18px", "15px"]}
								fontWeight={600}
								lineHeight={"28px"}
							>
								Employement Status
							</Text>
							{/* {!isEmpty(employment_check) ? NotVerified : Verified} */}
							{Verified}
						</Box>

						{/* <Box>
							<Text
								color="#666D76"
								fontSize={["18px", "15px"]}
								fontWeight={600}
								lineHeight={"28px"}
							>
								Live Detectness
							</Text>
							{employment_check === "" ? NotVerified : Verified}
						</Box> */}
					</Box>

					<Box w="190px" display={"flex "} flexDir={"column"} gap="2em">
						<Box>
							<Text
								color="#666D76"
								fontSize={["18px", "15px"]}
								fontWeight={600}
								lineHeight={"28px"}
							>
								Account Balance
							</Text>
							{lowRisk}

							{/* {isEmpty(account_check) ? NotVerified : Verified} */}
						</Box>

						<Box>
							<Text
								color="#666D76"
								fontSize={["18px", "15px"]}
								fontWeight={600}
								lineHeight={"28px"}
							>
								Email Verification
							</Text>
							{/* {isEmpty(email_check) ? NotVerified : Verified} */}
							{Verified}
						</Box>

						{/* <Box>
							<Text
								color="#666D76"
								fontSize={["18px", "15px"]}
								fontWeight={600}
								lineHeight={"28px"}
							>
								E-Signature
							</Text>
							<Box
								display={"flex"}
								gap=".3em"
								fontWeight={600}
								lineHeight={"28px"}
								my=".3em"
							>
								{verificationIcon} <Text>Verified</Text>
							</Box>
						</Box> */}
					</Box>

					<Box w="190px" display={"flex "} flexDir={"column"} gap="2em">
						<Box>
							<Text
								color="#666D76"
								fontSize={["18px", "15px"]}
								fontWeight={600}
								lineHeight={"28px"}
							>
								Avarage Salary
							</Text>
							{/* {isEmpty(salary_check) ? NotVerified : Verified} */}
							{lowRisk}
						</Box>

						<Box>
							<Text
								color="#666D76"
								fontSize={["18px", "15px"]}
								fontWeight={600}
								lineHeight={"28px"}
							>
								Live Detectness
							</Text>
							{/* {isEmpty(address_check) ? NotVerified : Verified} */}
							{Verified}
						</Box>
					</Box>

					<Box w="190px" display={"flex "} flexDir={"column"} gap="2em">
						<Box>
							<Text
								color="#666D76"
								fontSize={["18px", "15px"]}
								fontWeight={600}
								lineHeight={"28px"}
							>
								Avarage Salary
							</Text>
							{/* {isEmpty(salary_check) ? NotVerified : Verified} */}
							{Verified}
						</Box>

						<Box>
							<Text
								color="#666D76"
								fontSize={["18px", "15px"]}
								fontWeight={600}
								lineHeight={"28px"}
							>
								Traveled Before 
							</Text>
							{/* {isEmpty(address_check) ? NotVerified : Verified} */}
							{yes}
						</Box>
					</Box>
				</Box>
				
{/* 
				risk item */}
				
			</Flex>

			

			{/* new risk part */}
			
		</Box>
	);
};

export default ChecksView;


/*

*/