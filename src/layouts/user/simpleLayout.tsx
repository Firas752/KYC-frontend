import { Box, Container, Text, Flex, Avatar } from "@chakra-ui/react";
import React, { ReactNode } from "react";

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
						<Text
							fontWeight={"bold"}
							cursor={"pointer"}
							color="#1967FD"
							fontSize={"16px"}
						>
							Support
						</Text>
						<Avatar name="Obiabo Immanuel" />
					</Flex>
				)}

				{heading && (
					<Box textAlign={"center"} my="1.5em" fontWeight={"bold"} py="1em">
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

				<Box py="em">{children}</Box>
			</Container>
		</Box>
	);
};

export default SimpleLayout;
