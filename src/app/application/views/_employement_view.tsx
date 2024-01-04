"use client";
import { Box, Flex, Text } from "@chakra-ui/react";
import React, { FC } from "react";
import Link from "next/link";
import { number } from "yup";

interface IEmployment {
	status?: string;
	salary?: number;
	company_name?: string;
	letter_link?: string | any;
	//salary?: number, 
	lastSalary?: number, 
	card?: string

}

const statmentIcon = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="30"
		height="30"
		viewBox="0 0 30 30"
		fill="none"
	>
		<rect
			width="29.3349"
			height="30"
			transform="translate(0.0245361)"
			fill="white"
		/>
		<path
			d="M24.4703 15.625V8.5C24.4703 6.3998 24.4703 5.3497 24.0706 4.54754C23.7191 3.84193 23.1581 3.26825 22.4682 2.90873C21.6838 2.5 20.657 2.5 18.6033 2.5H10.7807C8.72704 2.5 7.70022 2.5 6.91584 2.90873C6.22587 3.26825 5.66492 3.84193 5.31336 4.54754C4.9137 5.3497 4.9137 6.3998 4.9137 8.5V21.5C4.9137 23.6002 4.9137 24.6503 5.31336 25.4525C5.66492 26.1581 6.22587 26.7317 6.91584 27.0913C7.70022 27.5 8.72699 27.5 10.7805 27.5H15.3031M17.1366 13.75H9.80285M12.2474 18.75H9.80285M19.5812 8.75H9.80285M18.3589 23.75L22.0257 27.5M22.0257 27.5L25.6926 23.75M22.0257 27.5V20"
			stroke="black"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</svg>
);

const EmploymentView: FC<IEmployment> = ({
	status,
	letter_link,
	salary,
	company_name,
	lastSalary
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
								Employment Status
							</Text>
							<Box
								display={"flex"}
								gap=".3em"
								fontWeight={600}
								lineHeight={"28px"}
								my=".3em"
							>
								<Text>{status ? "Employed" : "Not Employed" || "-"}</Text>
							</Box>
						</Box>

						{/* <Box>
							<Text
								color="#666D76"
								fontSize={["18px", "15px"]}
								fontWeight={600}
								lineHeight={"28px"}
							>
								Employment Letter
							</Text>
							<Box
								display={"flex"}
								gap=".3em"
								fontWeight={600}
								lineHeight={"28px"}
								my=".3em"
							>
								<Link href={letter_link} target="_blank">
									{statmentIcon}
								</Link>
								<Text>Verified</Text>
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
								Salary
							</Text>
							<Box
								display={"flex"}
								gap=".3em"
								fontWeight={600}
								lineHeight={"28px"}
								my=".3em"
							>
								<Text>{salary || "-"}</Text>
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
								Company Name
							</Text>
							<Box
								display={"flex"}
								gap=".3em"
								fontWeight={600}
								lineHeight={"28px"}
								my=".3em"
							>
								<Text>{company_name || "-"}</Text>
							</Box>
						</Box>
					</Box>
				</Box>
			</Flex>
		</Box>
	);
};

export default EmploymentView;
