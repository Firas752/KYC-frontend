import DefaultTable from "@/components/molecules/table";
import { Box, Text, Flex, Tr, Td, Avatar } from "@chakra-ui/react";
import React, { FC, ReactNode } from "react";
import { FiEdit2 } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";

interface TeamInterface {
	children: ReactNode;
	title: string;
	content: string;
}

const TeamContainer: FC<TeamInterface> = ({ children, title, content }) => {
	return (
		<Flex
			gap="1.5em"
			alignItems={"center"}
			flexDir={["column", "column", "row"]}
		>
			<Box w={["100%", "100%", ""]}>
				<Text fontWeight="semibold">{title}</Text>
				<Text color="brand.secondary_text">{content}</Text>
			</Box>

			<Box
				w={["100%", "100%", "1090px"]}
				borderRadius={"lg"}
				border={"1px solid var(--primary-gray)"}
			>
				{children}
			</Box>
		</Flex>
	);
};

const tableHeader = ["Name", "Date Added", "Last Active", ""];

const TeamPage = () => {
	return (
		<>
			<TeamContainer
				title="Admin users"
				content={`Admins can add and remove users and manage organization-level settings.`}
			>
				<DefaultTable tableHeader={tableHeader}>
					<Tr color={"brand.secondary_text"}>
						<Td>
							<Box display={"flex"} alignItems="center" gap="1em">
								<Avatar name="Obiabo Immanuel" />
								<Box>
									<Text fontWeight={500} fontSize={"15px"}>
										Olivia Rhyme
									</Text>
									<Text color="#475467">olivia@untitledui.com</Text>
								</Box>
							</Box>
						</Td>

						<Td>October 26, 2023</Td>
						<Td>September 12, 2023</Td>

						<Td>
							<Flex gap="1em">
								<RiDeleteBinLine cursor="pointer" size="1.2em" />
								<FiEdit2 cursor="pointer" size="1.2em" />
							</Flex>
						</Td>
					</Tr>
				</DefaultTable>
			</TeamContainer>

			<Box
				height={"1px"}
				width={"100%"}
				bg="var(--primary-gray)"
				my="2em"
			></Box>

			<TeamContainer
				title="Account Users"
				content={`Account users can assess and review risks, questionnaires, data leaks and identify breaches.`}
			>
				<DefaultTable tableHeader={tableHeader}>
					{[1, 1, 1].map((_, key) => {
						return (
							<Tr color={"brand.secondary_text"} key={key}>
								<Td>
									<Box display={"flex"} alignItems="center" gap="1em">
										<Avatar name="Obiabo Immanuel" />
										<Box>
											<Text fontWeight={500} fontSize={"15px"}>
												Olivia Rhyme
											</Text>
											<Text color="#475467">olivia@untitledui.com</Text>
										</Box>
									</Box>
								</Td>

								<Td>October 26, 2023</Td>
								<Td>September 12, 2023</Td>

								<Td>
									<Flex gap="1em">
										<RiDeleteBinLine cursor="pointer" size="1.2em" />
										<FiEdit2 cursor="pointer" size="1.2em" />
									</Flex>
								</Td>
							</Tr>
						);
					})}
				</DefaultTable>
			</TeamContainer>
		</>
	);
};

export default TeamPage;
