//@ts-nocheck
"use client";
import SimpleLayout from "@/layouts/user/simpleLayout";
import React, { useState } from "react";
import {
	Box,
	Text,
	Center,
	Flex,
	useToast,
	useDisclosure,
} from "@chakra-ui/react";
import { BsCheckCircleFill } from "react-icons/bs";
import { DefaultButton, MobileButton } from "@/components/atom/button";
import Link from "next/link";

import {
	employment_verification_svg,
	income_verification_svg,
	passport_verification_svg,
	signature_verification_svg,
} from "@/assets/svgs/task_svgs";
import { useRouter } from "next/navigation";
import { useStore } from "@/zustand/store";
import ModalContainer from "@/layouts/popups/modalContainer";
import { PiSealCheckFill } from "react-icons/pi";

const checkedIcon = (
	<Box>
		<BsCheckCircleFill size="1.5em" color="#00A980" />
	</Box>
);

const proceedIcon = (
	<Box
		bg="#D3D3D3"
		w="40px"
		h="40px"
		borderRadius={"50px"}
		display={"flex"}
		alignItems={"center"}
		justifyContent={"center"}
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
		>
			<path
				d="M9 18L15 12L9 6"
				stroke="#404040"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>
	</Box>
);

const Page = () => {
	const [isDisabled, setDisabled] = useState<boolean>(true);
	const router = useRouter();
	const { isOpen, onOpen, onClose } = useDisclosure();
	const { checklistData } = useStore();
	const checklistItems = checklistData?.checklist;

	console.log(checklistItems);
	console.log("asan was here with test");
	const verification_details = [
		// {
		// 	title: "Instant Verification",
		// 	name: "Passport",
		// 	description: `Scan your passport's photo page`,
		// 	icon: passport_verification_svg,
		// 	link: checklistItems?.passport_verification_link,
		// },
		{
			title: "Instant Verification",
			name: "Income",
			description: `Choose the bank account you receive your salary in`,
			icon: income_verification_svg,
			link: checklistItems?.income_verification_link,
		},
		{
			title: "Instant Verification",
			name: "Employement",
			description: `Choose the Employment Bureau with your employment status`,
			icon: employment_verification_svg,
			link: checklistItems?.employment_verification_link,
		},
		// {
		// 	title: "Instant Verification",
		// 	name: "E.signatures",
		// 	description: `Upload last 3 months bank statements`,
		// 	icon: signature_verification_svg,
		// 	link: "link",
		// },
	];
	const toast = useToast();

	const handleOnclick = () =>
		toast({
			status: "success",
			title: " Submitted",
			description:
				"Thank you for submitting your details, we will get back to you",
			position: "top",
		});

	const goToNext = () => router.push("/user/onboarding/task/documents");
	return (
		<SimpleLayout taskSection="Tasks" profile={true}>
			<Box>
				{verification_details?.map((_, key) => {
					const urls = _.link;

					return (
						<div key={key}>
							<Link href={urls} target="_blank">
								<Box
									display="flex"
									border="1px solid var(--primary-gray)"
									py="1.5em"
									rounded={"10px"}
									px="1em"
									alignItems={"center"}
									justifyContent={"space-between"}
									cursor={"pointer"}
									my="1.5em"
								>
									<Flex alignItems="center" gap="15px">
										<Box>{_.icon}</Box>
										<Box>
											<Text
												color={"brand.success"}
												fontSize={"12px"}
												fontWeight={600}
											>
												{_.title}
											</Text>
											<Text
												fontWeight={700}
												fontSize={"20px"}
												color={"brand.dark_text"}
											>
												{_.name}
											</Text>
											<Text color={"brand.dark_text"} fontSize={"13px"}>
												{_.description}
											</Text>
										</Box>
									</Flex>

									<Box>{proceedIcon}</Box>
								</Box>
							</Link>
						</div>
					);
				})}
			</Box>
			<Box>
				<Center>
					<MobileButton w="100%" onClick={handleOnclick}>
						Done
					</MobileButton>
				</Center>
			</Box>

			<ModalContainer isOpen={isOpen} onClose={onClose}>
				<Box textAlign={"center"}>
					<Box>
						<center>
							<PiSealCheckFill size="5em" color="green" />
						</center>
						<Text my=".4em" fontWeight="semibold">
							Submitted successfully
						</Text>
						<Text>We have received your details, we will get back to you</Text>
						<DefaultButton w={"100%"} onClick={onClose}>
							OK
						</DefaultButton>
					</Box>
				</Box>
			</ModalContainer>
		</SimpleLayout>
	);
};

export default Page;
