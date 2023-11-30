"use client";
import DashboardLayout from "@/layouts/dashboard_layout";
import RequirementPage from "@/pages/dashboard/requirement";
import React from "react";
import { DefaultButton } from "@/components/atom/button";
import { useDisclosure } from "@chakra-ui/react";
import Link from "next/link";

const Page = () => {
	const { onOpen, isOpen, onClose } = useDisclosure();
	return (
		<DashboardLayout
			title="Requirements"
			isBack={true}
			headerContent={
				<Link href="/requirement/create">
					<DefaultButton onClick={onOpen}>Create Requirement</DefaultButton>
				</Link>
			}
		>
			<RequirementPage />
		</DashboardLayout>
	);
};

export default Page;
