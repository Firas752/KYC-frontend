"use client";
import { Box, Flex, Text } from "@chakra-ui/react";
import moment from "moment";
import React, { FC, useState } from "react";

interface ProfileInterface {
	first_name?: string;
	last_name?: string;
	middle_name?: string;
	sex?: string;
	email?: string;
	phone_number?: string;
	nationality?: string;
	date_of_birth?: string | any;
	passport?: string;
	passport_type?: string;
	passport_authroity?: string;
	issued_date?: string;
	expiry_date?: string;
	place_of_birth?: string;
	address?: string;
	passport_number?: string;
	passport_front?: string;
	passport_face?: string;
	score?: string;
}

const ProfileView: FC<ProfileInterface> = ({
	first_name,
	last_name,
	issued_date,
	sex,
	email,
	expiry_date,
	nationality,
	date_of_birth,
	phone_number,
	address,
	place_of_birth,
	passport_authroity,
	passport_number,
	score,
	passport_front,
	passport_face,
}) => {
	const [preview, setPreview] = useState<string | undefined>(passport_face);
	const currentYear = new Date().getFullYear();

	const birth_year = date_of_birth?.split("-")[0];
	const applicant_age = currentYear - birth_year;

	const errorImage = (
		<Flex h="100%" alignItems={"center"} justifyContent={"center"}>
			<Text fontSize={"15px"} color={"gray"}>
				No Image
			</Text>
		</Flex>
	);
	return (
		<Box>
			<Flex gap={["1em", "3em"]} flexDir={["column-reverse", "row"]}>
				<Box
					w={"55%"}
					display={"flex"}
					gap="1em"
					justifyContent={"space-between"}
					flexWrap="wrap"
				>
					<Box w="190px" display={"flex "} flexDir={"column"} gap="1em">
						<Box>
							<Text
								color="#666D76"
								fontSize={["15px", "14px"]}
								fontWeight={600}
								lineHeight={"28px"}
							>
								First Name
							</Text>
							<Text fontWeight={600} lineHeight={"28px"}>
								{first_name || "-"}
							</Text>
						</Box>

						<Box>
							<Text
								color="#666D76"
								fontSize={["15px", "14px"]}
								fontWeight={600}
								lineHeight={"28px"}
							>
								Sex
							</Text>
							<Text fontWeight={600} lineHeight={"28px"}>
								{sex || "-"}
							</Text>
						</Box>

						<Box>
							<Text
								color="#666D76"
								fontSize={["15px", "14px"]}
								fontWeight={600}
								lineHeight={"28px"}
							>
								Nationality
							</Text>
							<Text fontWeight={600} lineHeight={"28px"}>
								{nationality || "-"}
							</Text>
						</Box>

						<Box>
							<Text
								color="#666D76"
								fontSize={["15px", "14px"]}
								fontWeight={600}
								lineHeight={"28px"}
							>
								Passport Number
							</Text>
							<Text fontWeight={600} lineHeight={"28px"}>
								{passport_number}
							</Text>
						</Box>

						<Box>
							<Text
								color="#666D76"
								fontSize={["15px", "14px"]}
								fontWeight={600}
								lineHeight={"28px"}
							>
								Issueing Date
							</Text>
							<Text fontWeight={600} lineHeight={"28px"}>
								{moment(issued_date).format("ll")}
							</Text>
						</Box>
					</Box>

					<Box w="190px" display={"flex "} flexDir={"column"} gap="1em">
						<Box>
							<Text
								color="#666D76"
								fontSize={["15px", "14px"]}
								fontWeight={600}
								lineHeight={"28px"}
							>
								Middle Name
							</Text>
							<Text fontWeight={600} lineHeight={"28px"}>
								{first_name || "-"}
							</Text>
						</Box>

						<Box>
							<Text
								color="#666D76"
								fontSize={["15px", "14px"]}
								fontWeight={600}
								lineHeight={"28px"}
							>
								Email
							</Text>
							<Text fontWeight={600} lineHeight={"28px"}>
								{email || "-"}
							</Text>
						</Box>

						<Box>
							<Text
								color="#666D76"
								fontSize={["15px", "14px"]}
								fontWeight={600}
								lineHeight={"28px"}
							>
								Date of Birth
							</Text>
							<Text fontWeight={600} lineHeight={"28px"}>
								{moment(date_of_birth).format("ll") || "-"}
							</Text>
						</Box>

						<Box>
							<Text
								color="#666D76"
								fontSize={["15px", "14px"]}
								fontWeight={600}
								lineHeight={"28px"}
							>
								Passport Type
							</Text>
							<Text fontWeight={600} lineHeight={"28px"}>
								P
							</Text>
						</Box>

						<Box>
							<Text
								color="#666D76"
								fontSize={["15px", "14px"]}
								fontWeight={600}
								lineHeight={"28px"}
							>
								Expiry Date
							</Text>
							<Text fontWeight={600} lineHeight={"28px"}>
								{moment(expiry_date).format("ll")}
							</Text>
						</Box>
					</Box>

					<Box w="190px" display={"flex "} flexDir={"column"} gap="1em">
						<Box>
							<Text
								color="#666D76"
								fontSize={["15px", "14px"]}
								fontWeight={600}
								lineHeight={"28px"}
							>
								Last name
							</Text>
							<Text fontWeight={600} lineHeight={"28px"}>
								{last_name || "-"}
							</Text>
						</Box>

						<Box>
							<Text
								color="#666D76"
								fontSize={["15px", "14px"]}
								fontWeight={600}
								lineHeight={"28px"}
							>
								Phone Number
							</Text>
							<Text fontWeight={600} lineHeight={"28px"}>
								{phone_number || "-"}
							</Text>
						</Box>

						<Box>
							<Text
								color="#666D76"
								fontSize={["15px", "14px"]}
								fontWeight={600}
								lineHeight={"28px"}
							>
								Place of Birth
							</Text>
							<Text fontWeight={600} lineHeight={"28px"}>
								{place_of_birth}
							</Text>
						</Box>

						<Box>
							<Text
								color="#666D76"
								fontSize={["15px", "14px"]}
								fontWeight={600}
								lineHeight={"28px"}
							>
								Passport Authority
							</Text>
							<Text fontWeight={600} lineHeight={"28px"}>
								{passport_authroity}
							</Text>
						</Box>

						<Box>
							<Text
								color="#666D76"
								fontSize={["15px", "14px"]}
								fontWeight={600}
								lineHeight={"28px"}
							>
								Age
							</Text>
							<Text fontWeight={600} lineHeight={"28px"}>
								{applicant_age}
							</Text>
						</Box>
					</Box>
				</Box>
				<Box w={["100%", "40%"]}>
					<Box
						w={"100%"}
						h={["200px", "55%"]}
						bg="gray.200"
						borderRadius={"10px"}
						backgroundImage={passport_front ? passport_front : ""}
						backgroundSize={"cover"}
						backgroundPosition={"center"}
						backgroundRepeat={"no-repeat"}
					>
						{passport_front === "" || passport_front === null ? errorImage : ""}
					</Box>
					<Flex my="1em" gap="1em">
						<Box
							w={"100px"}
							cursor={"pointer"}
							h="80px"
							bg="gray.200"
							borderRadius={"10px"}
							backgroundImage={passport_front ? passport_front : ""}
							backgroundSize={"cover"}
							backgroundPosition={"center"}
							backgroundRepeat={"no-repeat"}
							onClick={() => setPreview(passport_front)}
						>
							{passport_front === "" || passport_front === null
								? errorImage
								: ""}
						</Box>
						<Box
							w={"100px"}
							cursor={"pointer"}
							h="80px"
							bg="gray.200"
							borderRadius={"10px"}
							backgroundImage={passport_face ? passport_face : ""}
							backgroundSize={"cover"}
							backgroundPosition={"center"}
							backgroundRepeat={"no-repeat"}
							onClick={() => setPreview(passport_face)}
						>
							{passport_face === "" || passport_face === null ? errorImage : ""}
						</Box>
					</Flex>

					<Flex gap="4em">
						<Box>
							<Text
								color="#666D76"
								fontSize={["15px", "14px"]}
								fontWeight={600}
								lineHeight={"28px"}
							>
								Issuing Date
							</Text>
							<Text fontWeight={600} color={"#01C22C"} lineHeight={"28px"}>
								{moment(issued_date).format("ll") || "-"}
							</Text>
						</Box>

						<Box>
							<Text
								color="#666D76"
								fontSize={["15px", "14px"]}
								fontWeight={600}
								lineHeight={"28px"}
							>
								Score
							</Text>
							<Text fontWeight={600} color={"#01C22C"} lineHeight={"28px"}>
								{score ? score : "-"}
							</Text>
						</Box>
					</Flex>
				</Box>
			</Flex>
		</Box>
	);
};

export default ProfileView;
