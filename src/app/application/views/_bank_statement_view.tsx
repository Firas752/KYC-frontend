"use client";
import { Box, Flex, Text } from "@chakra-ui/react";
import React, { FC } from "react";
import { countryToAlpha2, countryToAlpha3 } from "country-to-iso";
import countryToCurrency from "country-to-currency";
let currencyFormatter = require("currency-formatter");

interface BankInformation {
	account_balance?: string;
	bank_holder_name: string;
	bank_country?: string;
	currency?: string;
	bank_name?: string;
	country?: string;
}

const BankStatementView: FC<BankInformation> = ({
	bank_holder_name,
	account_balance,
	bank_country,
	bank_name,
	country,
	currency,
}) => {
	//@ts-ignore
	const country_currency = countryToCurrency[countryToAlpha2(country)];

	return (
		<Box>
			{/* <Flex gap={["1em", "3em"]} flexDir={["column-reverse", "row"]}>
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
								Bank Holder Name
							</Text>
							<Box
								display={"flex"}
								gap=".3em"
								fontWeight={600}
								lineHeight={"28px"}
								my=".3em"
							>
								<Text>{bank_holder_name || "-"}</Text>
							</Box>
						</Box>

						<Box>
							<Text
								color="#666D76"
								fontSize={["18px", "15px"]}
								fontWeight={600}
								lineHeight={"28px"}
							>
								Bank Name
							</Text>
							<Box
								display={"flex"}
								gap=".3em"
								fontWeight={600}
								lineHeight={"28px"}
								my=".3em"
							>
								<Text>{bank_name || "-"}</Text>
							</Box>
						</Box>

						<Box>
							<Text
								color="#666D76"
								fontSize={["18px", "15px"]}
								fontWeight={600}
								lineHeight={"28px"}
							>
								Bank Statement
							</Text>
							<Box
								display={"flex"}
								gap=".3em"
								fontWeight={600}
								lineHeight={"28px"}
								my=".3em"
							>
								<Text>Bank Statemetn</Text>
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
								Bank Country
							</Text>
							<Box
								display={"flex"}
								gap=".3em"
								fontWeight={600}
								lineHeight={"28px"}
								my=".3em"
							>
								<Text>{bank_country || "-"}</Text>
							</Box>
						</Box>

						<Box>
							<Text
								color="#666D76"
								fontSize={["18px", "15px"]}
								fontWeight={600}
								lineHeight={"28px"}
							>
								Currency
							</Text>
							<Box
								display={"flex"}
								gap=".3em"
								fontWeight={600}
								lineHeight={"28px"}
								my=".3em"
							>
								<Text>{country_currency || "-"}</Text>
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
								<Text>
									{currencyFormatter.format(account_balance, {
										code: country_currency,
									}) || "-"}
								</Text>
							</Box>
						</Box>
					</Box>
				</Box>
			</Flex> */}

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
								Salary
							</Text>
							<Box
								display={"flex"}
								gap=".3em"
								fontWeight={600}
								lineHeight={"28px"}
								my=".3em"
							>
								<Text>{bank_holder_name || "-"}</Text>
							</Box>
						</Box>

						<Box>
							<Text
								color="#666D76"
								fontSize={["18px", "15px"]}
								fontWeight={600}
								lineHeight={"28px"}
							>
								Bank Name
							</Text>
							<Box
								display={"flex"}
								gap=".3em"
								fontWeight={600}
								lineHeight={"28px"}
								my=".3em"
							>
								<Text>{bank_name || "-"}</Text>
							</Box>
						</Box>

						<Box>
							<Text
								color="#666D76"
								fontSize={["18px", "15px"]}
								fontWeight={600}
								lineHeight={"28px"}
							>
								Bank Statement
							</Text>
							<Box
								display={"flex"}
								gap=".3em"
								fontWeight={600}
								lineHeight={"28px"}
								my=".3em"
							>
								<Text>Bank Statemetn</Text>
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
								Bank Country
							</Text>
							<Box
								display={"flex"}
								gap=".3em"
								fontWeight={600}
								lineHeight={"28px"}
								my=".3em"
							>
								<Text>{bank_country || "-"}</Text>
							</Box>
						</Box>

						<Box>
							<Text
								color="#666D76"
								fontSize={["18px", "15px"]}
								fontWeight={600}
								lineHeight={"28px"}
							>
								Currency
							</Text>
							<Box
								display={"flex"}
								gap=".3em"
								fontWeight={600}
								lineHeight={"28px"}
								my=".3em"
							>
								<Text>{country_currency || "-"}</Text>
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
								<Text>
									{currencyFormatter.format(account_balance, {
										code: country_currency,
									}) || "-"}
								</Text>
							</Box>
						</Box>
					</Box>
				</Box>
			</Flex>

		</Box>
	);
};

export default BankStatementView;
