import DashboardLayout from "@/layouts/dashboard_layout";
import { Text, Flex, Box } from "@chakra-ui/react";
import React from "react";
import ContentViewContainer from "@/components/organisms/content_view_container";
import { DefaultButton } from "@/components/atom/button";
import { BiUserCheck } from "react-icons/bi";
import { FiUserX } from "react-icons/fi";
import ProfileView from "../views/_profile_view";
import ChecksView from "../views/checks";
import EmploymentView from "../views/_employement_view";
import BankStatementView from "../views/_bank_statement_view";
import UtilityView from "../views/utilities_view";
import Esignature from "../views/_Esignature";

const actionHolder = (
	<Flex gap="1em">
		<DefaultButton
			gap=".5em"
			bg="none"
			border={"1px solid var(--primary-error)"}
		>
			<FiUserX size="1.4em" color="var(--primary-error)" />
			<Text color={"alert.error"}>Reject</Text>
		</DefaultButton>
		<DefaultButton bg="none" border={"1px solid var(--primary-success)"}>
			<BiUserCheck size="1.4em" gap=".5em" color="var(--primary-success)" />{" "}
			<Text color={"brand.success"}>Accept</Text>
		</DefaultButton>
	</Flex>
);

const Page = () => {
	return (
		<DashboardLayout title="View item name" headerContent={actionHolder}>
			<Box display={"flex"} flexDir={"column"} gap="1.5em">
				<ContentViewContainer title="Profile">
					<ProfileView />
				</ContentViewContainer>
				<ContentViewContainer title="Checks">
					<ChecksView />
				</ContentViewContainer>
				<ContentViewContainer title="Employment">
					<EmploymentView />
				</ContentViewContainer>
				<ContentViewContainer title="Bank Statment">
					<BankStatementView />
				</ContentViewContainer>
				<ContentViewContainer title="Address & Utility Bill">
					<UtilityView />
				</ContentViewContainer>
				<ContentViewContainer title="E-Signature">
					<Esignature />
				</ContentViewContainer>
			</Box>
		</DashboardLayout>
	);
};

export default Page;
