"use client";
import { Box, Flex, Text } from "@chakra-ui/react";
import React, { useState } from "react";

const ProfileView = () => {
	const [preview, setPreview] = useState("default_preview.svg");

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
								Obiabo
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
								Male
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
								Indonesian
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
								A0542322
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
								June 23, 2020
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
								Sudo
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
								-
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
								April 13, 1998
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
								June 23, 2027
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
								Emmanuel
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
								-
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
								Jakarta
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
								Indonesia
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
								27
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
						backgroundImage={`/images/${preview}`}
						backgroundSize={"cover"}
						backgroundPosition={"center"}
						backgroundRepeat={"no-repeat"}
					></Box>
					<Flex my="1em" gap="1em">
						<Box
							w={"100px"}
							cursor={"pointer"}
							h="80px"
							bg="gray.200"
							borderRadius={"10px"}
							backgroundImage={`/images/selfie_preview.svg`}
							backgroundSize={"cover"}
							backgroundPosition={"center"}
							backgroundRepeat={"no-repeat"}
							onClick={() => setPreview("selfie_preview.svg")}
						></Box>
						<Box
							w={"100px"}
							cursor={"pointer"}
							h="80px"
							bg="gray.200"
							borderRadius={"10px"}
							backgroundImage={`/images/passport_preview.svg`}
							backgroundSize={"cover"}
							backgroundPosition={"center"}
							backgroundRepeat={"no-repeat"}
							onClick={() => setPreview("passport_preview.svg")}
						></Box>
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
								June 23, 2020
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
								0.0
							</Text>
						</Box>
					</Flex>
				</Box>
			</Flex>
		</Box>
	);
};

export default ProfileView;
