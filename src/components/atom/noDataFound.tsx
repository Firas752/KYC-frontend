import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { FcPackage } from "react-icons/fc";
const NoDataFound = () => {
	return (
		<Box
			textAlign={"center"}
			h="50vh"
			display={"flex"}
			alignItems={"center"}
			justifyContent={"center"}
		>
			<Text>No Data Found</Text>
		</Box>
	);
};

export default NoDataFound;
