"use client";
import { Box, Spinner, Text } from "@chakra-ui/react";
const Loading = () => {
	return (
		<Box
			pos={"fixed"}
			alignItems={"center"}
			justifyContent={"center"}
			top={0}
			bottom={0}
			left={0}
			right={0}
			bg={"white"}
			zIndex={99999}
			h={"100vh"}
			display={"flex"}
		>
			<Box mx="auto" textAlign={"center"}>
				<Spinner
					thickness="4px"
					speed="0.65s"
					emptyColor="gray.200"
					color="blue.500"
					size="xl"
				/>

				<Text my="2em" color="brand.secondary_text">
					Loading, Please wait
				</Text>
			</Box>
		</Box>
	);
};
export default Loading;
