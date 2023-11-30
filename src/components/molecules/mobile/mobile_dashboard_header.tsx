import Logo from "@/components/atom/logo";
import React from "react";
import { Box, Avatar, Flex } from "@chakra-ui/react";
import { UserButton } from "@clerk/nextjs";
const MobileDashboardHeader = () => {
	return (
		<Box
			display={["block", "block", "none"]}
			mb="1em"
			pb="1em"
			borderBottom={"1.5px solid var(--primary-gray)"}
			px="2em"
		>
			<Flex w="100%" alignItems={"center"} justifyContent={"space-between"}>
				<Box>
					<Logo />
				</Box>
				<UserButton />
			</Flex>
		</Box>
	);
};

export default MobileDashboardHeader;
