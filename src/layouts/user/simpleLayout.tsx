import { Box, Container, Text, Flex, Avatar } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import { RiWhatsappFill } from "react-icons/ri";
import Link from "next/link";
interface OnboardingLayout {
	children: ReactNode;
	heading?: string;
	description?: string;
	taskSection?: string;
	profile?: boolean;
}

const SimpleLayout = ({
	children,
	heading,
	description,
	taskSection,
	profile,
}: OnboardingLayout) => {
	return (
		<Box w={["100%", "100%", "100%", "500px"]} mx={"auto"} h="100vh">
			<Container>
				{profile && (
					<Flex justifyContent={"space-between"} alignItems={"center"} my="1em">
						<Link
							href="https://api.whatsapp.com/send?phone=966500041554&text=Thanks%20for%20contacting%20our%20support"
							target="_blank"
						>
							<Text
								fontWeight={"bold"}
								cursor={"pointer"}
								color="#1967FD"
								fontSize={"16px"}
							>
								Support
							</Text>
						</Link>
						<Avatar src="/images/logomark.svg" />
					</Flex>
				)}

				{heading && (
					<Box
						display={"flex"}
						alignItems={"center"}
						textAlign={"center"}
						my="1.5em"
						fontWeight={"bold"}
						justifyContent="center"
						py="1em"
					>
						<Text fontSize={"21px"}>{heading}</Text>
					</Box>
				)}

				{description && (
					<Box>
						<Text textAlign={"center"} color="brand.dark_text">
							{description}
						</Text>
					</Box>
				)}

				{taskSection && (
					<Box textAlign="center">
						<Text fontWeight={"bold"} fontSize={"32px"}>
							Tasks
						</Text>
						{/* <Text color="brand.dark_text">1 of 6 tasks completed</Text> */}
					</Box>
				)}

				<Link
					href="https://api.whatsapp.com/send?phone=966500041554&text=Thanks%20for%20contacting%20our%20support"
					target="_blank"
				>
					<Text
						textAlign={"center"}
						fontWeight={600}
						cursor={"pointer"}
						pos="fixed"
						zIndex={9999999}
						right={2}
						bottom={2}
						w="fit-content"
						h="fit-content"
						bg="white"
						my="-.3em"
						borderRadius="50%"
					>
						<RiWhatsappFill size="3.5em" color="green" />
					</Text>
				</Link>

				<Box py="em">{children}</Box>
			</Container>
		</Box>
	);
};

export default SimpleLayout;
