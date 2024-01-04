"use client";
import { Box, Flex, Text } from "@chakra-ui/react";
import React, { FC, useState } from "react";

interface IUtility {
	address?: string;
	city?: string;
	utility_bill_url?: string;
}

const UtilityView: FC<IUtility> = ({ address, city, utility_bill_url }) => {
	return (
		<Box>
			<Flex gap={["1em", "3em"]} flexDir={["column-reverse", "column", "row"]}>
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
								Address
							</Text>
							<Box
								display={"flex"}
								gap=".3em"
								fontWeight={600}
								lineHeight={"28px"}
								my=".3em"
							>
								<Text>{address || "-"}</Text>
							</Box>
						</Box>

						<Box>
							<Text
								color="#666D76"
								fontSize={["18px", "15px"]}
								fontWeight={600}
								lineHeight={"28px"}
							>
								Utility Bill
							</Text>
							<Box
								display={"flex"}
								gap=".3em"
								fontWeight={600}
								lineHeight={"28px"}
								my=".3em"
							>
								<Text>{utility_bill_url || "-"}</Text>
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
								City
							</Text>
							<Box
								display={"flex"}
								gap=".3em"
								fontWeight={600}
								lineHeight={"28px"}
								my=".3em"
							>
								<Text>{city || "-"}</Text>
							</Box>
						</Box>
					</Box>

					<Box w="190px" display={"flex "} flexDir={"column"} gap="2em">
						<Box display={"none"}>
							<Text
								color="#666D76"
								fontSize={["18px", "15px"]}
								fontWeight={600}
								lineHeight={"28px"}
							>
								City
							</Text>
							<Box
								display={"flex"}
								gap=".3em"
								fontWeight={600}
								lineHeight={"28px"}
								my=".3em"
							>
								<Text>Pakistan</Text>
							</Box>
						</Box>
					</Box>
				</Box>
				<Box w={["100%", "100%", "40%"]} h="200px" bg="gray">
					map
				</Box>
			</Flex>
		</Box>
	);
};

export default UtilityView;
