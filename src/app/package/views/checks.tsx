"use client";
import { Box, Flex, Text } from "@chakra-ui/react";
import React, { useState } from "react";

const verificationIcon = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="29"
		height="28"
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

const ChecksView = () => {
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
							<Box
								display={"flex"}
								gap=".3em"
								fontWeight={600}
								lineHeight={"28px"}
								my=".3em"
							>
								{verificationIcon} <Text>Verified</Text>
							</Box>
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
							<Box
								display={"flex"}
								gap=".3em"
								fontWeight={600}
								lineHeight={"28px"}
								my=".3em"
							>
								{verificationIcon} <Text>Verified</Text>
							</Box>
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
							<Box
								display={"flex"}
								gap=".3em"
								fontWeight={600}
								lineHeight={"28px"}
								my=".3em"
							>
								{verificationIcon} <Text>Verified</Text>
							</Box>
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
								Account Balance
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
							<Box
								display={"flex"}
								gap=".3em"
								fontWeight={600}
								lineHeight={"28px"}
								my=".3em"
							>
								{verificationIcon} <Text>Verified</Text>
							</Box>
						</Box>

						<Box>
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
							<Box
								display={"flex"}
								gap=".3em"
								fontWeight={600}
								lineHeight={"28px"}
								my=".3em"
							>
								{verificationIcon} <Text>Verified</Text>
							</Box>
						</Box>

						<Box>
							<Text
								color="#666D76"
								fontSize={["18px", "15px"]}
								fontWeight={600}
								lineHeight={"28px"}
							>
								Address Verification
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
						</Box>
					</Box>
				</Box>
			</Flex>
		</Box>
	);
};

export default ChecksView;
