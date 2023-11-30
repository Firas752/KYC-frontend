import { Box, Spinner, Text } from "@chakra-ui/react";
import React from "react";

const IsLoadingData = () => {
	return (
		<Box
			textAlign={"center"}
			h="50vh"
			display={"flex"}
			alignItems={"center"}
			justifyContent={"center"}
		>
			<Box>
				<Spinner size="lg" />
				<Text my=".5em">Loading Data</Text>
			</Box>
		</Box>
	);
};

export default IsLoadingData;
