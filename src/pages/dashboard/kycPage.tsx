/* eslint-disable react/jsx-key */
import React from "react";
import { Box } from "@chakra-ui/react";
import CustomTab from "@/components/molecules/tab";
import ActiveKycs from "./kyc/activeKycs";

const tabsData: JSX.Element[] = [<ActiveKycs />, <ActiveKycs />];
const KycPage = () => {
	const lists = ["Active"];
	return (
		<Box>
			<CustomTab tabItems={lists}>{tabsData}</CustomTab>
		</Box>
	);
};

export default KycPage;
