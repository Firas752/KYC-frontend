import { Box, Container, Text } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface OnboardingLayout {
	children: ReactNode;
	heading: string;
	content: string;
}

const OnboardingLayout = ({ children, heading, content }: OnboardingLayout) => {
	return (
		<Box w={["100%", "500px"]} mx={"auto"}>
			<Box
				height="360px"
				width={"100%"}
				mx="auto"
				bg="gray.100"
				backgroundImage={"/background/_onboarding_image.svg"}
				backgroundRepeat={"no-repeat"}
				backgroundSize={"cover"}
				backgroundPosition={"center"}
			></Box>
			<Box my="1.5em">
				<Box
					textAlign={"center"}
					display={"flex"}
					flexDir={"column"}
					justifyContent={"space-between"}
					alignItems={"space-beween"}
					h="40vh"
				>
					<Box px="1.5em">
						<Text fontWeight={"semibold"} fontSize={["20px", "24px"]}>
							{heading}
						</Text>
						<Text color={"gray"} fontSize={["15px", "17px"]} my="1em">
							{content}
						</Text>
					</Box>

					<Box py="1em">{children}</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default OnboardingLayout;
