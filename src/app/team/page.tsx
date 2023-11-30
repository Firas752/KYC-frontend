"use client";
import { DefaultButton } from "@/components/atom/button";
import { InputField } from "@/components/atom/input";
import DashboardLayout from "@/layouts/dashboard_layout";
import ModalContainer from "@/layouts/popups/modalContainer";
import TeamPage from "@/pages/dashboard/team";
import { Button, useDisclosure, Text, Box } from "@chakra-ui/react";

const Page = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	return (
		<DashboardLayout
			// isBreadcrumb={true}
			title="Team Members"
			headerContent={
				<DefaultButton
					bg="none"
					border={"1px solid var(--primary-gray)"}
					onClick={onOpen}
					color="#344054"
				>
					+ Add team member
				</DefaultButton>
			}
			isBack={true}
			headerParagraph="Manage your team members and their account permissions here."
		>
			<TeamPage />

			<ModalContainer isOpen={isOpen} onClose={onClose}>
				<Text fontWeight="600" fontSize={"18px"}>
					Add Team Member
				</Text>
				<Text color={"brand.secondary_text"}>Your creating a new KYC Link</Text>

				<form>
					<Box my="1.5em">
						<InputField
							type="text"
							label="Name"
							placeholder="Enter members name"
							isRequired={true}
						/>

						<InputField
							type="email"
							label="Email"
							placeholder="Enter your Email"
							isRequired={true}
						/>
					</Box>
					<DefaultButton
						type="submit"
						bg="brand.primary"
						w="100%"
						color="white"
					>
						Invite Team Member
					</DefaultButton>
				</form>
			</ModalContainer>
		</DashboardLayout>
	);
};

export default Page;
