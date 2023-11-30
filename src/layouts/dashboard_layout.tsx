"use client";
import {
	Avatar,
	Box,
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	Flex,
	FormLabel,
	Text,
	Textarea,
	useDisclosure,
} from "@chakra-ui/react";
import React, { FC, Fragment, ReactNode } from "react";
import { DashboardNavItems } from "@/assets/svgs/dashboard_svgs";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { BsArrowLeftShort } from "react-icons/bs";
import { useRouter } from "next/navigation";
import MobileMenuBar from "@/components/molecules/mobile/mobile_menuebar";
import { HiChevronRight } from "react-icons/hi";
import MobileDashboardHeader from "@/components/molecules/mobile/mobile_dashboard_header";
import ModalContainer from "./popups/modalContainer";
import { DefaultButton } from "@/components/atom/button";
import isAuthenticated from "@/HOC/isAuthenticated";
import { deleteCookie } from "cookies-next";
import { useStore } from "@/zustand/store";
import { withClerkProvider } from "@/HOC/withClerkProvider";
import { UserButton } from "@clerk/nextjs";
interface DashboardLayout {
	children: ReactNode;
	title: string;
	headerContent?: ReactNode;
	isBack?: boolean;
	headerParagraph?: string;
	isBreadcrumb?: boolean;
}

const homeIcon = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="20"
		height="20"
		viewBox="0 0 20 20"
		fill="none"
	>
		<path
			d="M6.66667 14.1668H13.3333M9.18141 2.30345L3.52949 6.69939C3.15168 6.99324 2.96278 7.14017 2.82669 7.32417C2.70614 7.48716 2.61633 7.67078 2.56169 7.866C2.5 8.08639 2.5 8.3257 2.5 8.80433V14.8334C2.5 15.7669 2.5 16.2336 2.68166 16.5901C2.84144 16.9037 3.09641 17.1587 3.41002 17.3185C3.76654 17.5001 4.23325 17.5001 5.16667 17.5001H14.8333C15.7668 17.5001 16.2335 17.5001 16.59 17.3185C16.9036 17.1587 17.1586 16.9037 17.3183 16.5901C17.5 16.2336 17.5 15.7669 17.5 14.8334V8.80433C17.5 8.3257 17.5 8.08639 17.4383 7.866C17.3837 7.67078 17.2939 7.48716 17.1733 7.32417C17.0372 7.14017 16.8483 6.99324 16.4705 6.69939L10.8186 2.30345C10.5258 2.07574 10.3794 1.96189 10.2178 1.91812C10.0752 1.87951 9.92484 1.87951 9.78221 1.91812C9.62057 1.96189 9.47418 2.07574 9.18141 2.30345Z"
			stroke="#667085"
			stroke-width="1.66667"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</svg>
);

const DashboardLayout: FC<DashboardLayout> = ({
	children,
	headerContent,
	title,
	isBack,
	headerParagraph,
	isBreadcrumb,
}) => {
	const path = usePathname();
	const router = useRouter();
	const { isOpen, onClose, onOpen } = useDisclosure();
	const {
		isOpen: isLoggedOut,
		onClose: closeLogout,
		onOpen: logout,
	} = useDisclosure();

	//handle account loggout
	const handleLogOut = () => {
		deleteCookie("auth_access_token");
		router.replace("/auth");
	};

	const { authData } = useStore();

	return (
		<>
			<Flex>
				{/* Sidebar nav for desktop */}
				<Box
					width={["81px"]}
					display={["none", "none", "flex"]}
					justifyContent={"center"}
					borderRight="1px solid var(--primary-gray)"
					py="32px"
					position={"sticky"}
					bottom={0}
					top={0}
					h="100vh"
				>
					<Box
						display={"flex"}
						alignItems={"center"}
						flexDir={"column"}
						gap="3em"
						justifyContent={"space-between"}
					>
						<Box display={"flex"} flexDir={"column"} gap="2em">
							<Box>
								<Image
									width={50}
									height={100}
									src="/images/logomark.svg"
									alt="logo image"
								/>
							</Box>

							{DashboardNavItems.map((_, key) => {
								const matchRoute = path === _.path;
								return (
									<Fragment key={key}>
										<Link href={_.path}>
											<Box
												bg={matchRoute ? "shades.primary" : ""}
												display={"flex"}
												alignItems={"center"}
												justifyContent={"center"}
												borderRadius={"6px"}
												w={"48px"}
												h={"48px"}
											>
												{_.component}
											</Box>
										</Link>
									</Fragment>
								);
							})}
						</Box>

						<Box
							cursor="pointer"
							display={"flex"}
							flexDir={"column"}
							alignItems={"center"}
							justifyContent={"center"}
						>
							<Box onClick={onOpen}>
								<svg
									width="48"
									height="48"
									viewBox="0 0 48 48"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<rect width="48" height="48" rx="6" fill="white" />
									<path
										d="M21.1363 21.1363L16.9289 16.929M16.9289 31.0711L21.168 26.8321M26.8611 26.8638L31.0684 31.0711M31.0684 16.929L26.8287 21.1686M34 24C34 29.5228 29.5228 34 24 34C18.4772 34 14 29.5228 14 24C14 18.4772 18.4772 14 24 14C29.5228 14 34 18.4772 34 24ZM28 24C28 26.2091 26.2091 28 24 28C21.7909 28 20 26.2091 20 24C20 21.7909 21.7909 20 24 20C26.2091 20 28 21.7909 28 24Z"
										stroke="#667085"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
								</svg>
							</Box>

							{/* <Avatar
								name={authData[0]?.identity_data?.email}
								onClick={logout}
							/> */}
							<UserButton />
						</Box>
					</Box>
				</Box>

				{/* dashboard content section  1254px*/}
				<Box w={["100%", "100%", "1300px"]} mx={"auto"} py={["10px", "32px"]}>
					<MobileDashboardHeader />
					{/* BreadCrumb section */}

					<Box px={["2em"]}>
						{isBreadcrumb && (
							<Box mb="1em">
								<Breadcrumb
									spacing="8px"
									separator={<HiChevronRight color="gray.500" />}
								>
									<BreadcrumbItem>
										<BreadcrumbLink href="#">{homeIcon}</BreadcrumbLink>
									</BreadcrumbItem>

									<BreadcrumbItem>
										<BreadcrumbLink href="#" color={"#475467"}>
											Settings
										</BreadcrumbLink>
									</BreadcrumbItem>

									<BreadcrumbItem isCurrentPage>
										<BreadcrumbLink href="#" fontWeight={700} color="#344054">
											Team
										</BreadcrumbLink>
									</BreadcrumbItem>
								</Breadcrumb>
							</Box>
						)}

						{/* Include back button */}
						{isBack && (
							<Box
								display="flex"
								alignItems={"center"}
								onClick={router.back}
								cursor={"pointer"}
								my=".3em"
							>
								<BsArrowLeftShort size="1.7em" color="#6941C6" />
								<Text
									color="brand.primary"
									fontSize={"16px"}
									fontWeight={"semibold"}
								>
									Back
								</Text>
							</Box>
						)}

						<Flex
							display={"flex"}
							justifyContent={"space-between"}
							alignItems={["left", "left", "center"]}
							flexDir={["column", "column", "row"]}
							gap="1em"
						>
							<Box>
								<Text
									fontSize={["22px", "25px"]}
									fontWeight={600}
									lineHeight={"38px"}
								>
									{title}
								</Text>
								<Text color="brand.secondary_text" my=".5em">
									{headerParagraph}
								</Text>
							</Box>

							<Box>{headerContent}</Box>
						</Flex>
						<Box my={"2em"}>{children}</Box>
					</Box>
				</Box>
			</Flex>
			{/* mobile menubar */}
			<MobileMenuBar />
			<ModalContainer isOpen={isOpen} onClose={onClose}>
				<FormLabel>Submit Feedback</FormLabel>
				<Textarea placeholder="Write your feedback" />
				<DefaultButton w="100%" my="1em">
					Submit Feedback
				</DefaultButton>
			</ModalContainer>
			{/* logout modal */}
			{/* <ModalContainer isOpen={isLoggedOut} onClose={closeLogout}>
				<Flex gap=".5em">
					<Avatar name={"storedData?.identity_data?.email"} />
					<Box>
						<Text fontWeight={600}>Admin</Text>
						<Text>{authData[0]?.identity_data?.email}</Text>
					</Box>
				</Flex>
				<DefaultButton
					bg="red.100"
					color="red"
					w="100%"
					my="1em"
					onClick={handleLogOut}
				>
					Log out
				</DefaultButton>
			</ModalContainer> */}
		</>
	);
};

//@ts-ignore
export default withClerkProvider(DashboardLayout);
