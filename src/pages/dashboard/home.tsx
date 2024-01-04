//@ts-nocheck
"use client";
import DefaultTable from "@/components/molecules/table";
import ActionContainer from "@/components/organisms/action_container";
import DashboardLayout from "@/layouts/dashboard_layout";
import { Box, Text, Flex, Tr, Td } from "@chakra-ui/react";
import BadgeSchema from "@/components/atom/badge";
import React from "react";
import { useState, useEffect } from "react";
import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { axiosInstance } from "@/config/axios";
import moment from "moment";
import NoDataFound from "@/components/atom/noDataFound";
import { withQueryClient } from "@/HOC/withQueryClient";
import { capitalizeFirstLetter } from "@/utils/capitalize_first_word";
import IsLoadingData from "@/components/atom/isLoadingData";
import { apiMockedData } from "@/mocked_data";

type ReturnType = {
	id: string;
	status: string;
	created_at: string;
	updated_at: string;
	name: string;
	account_balance: number;
	average_salary: number;
	employment_status: boolean;
	org_id: string;
	package_id: string;

	user_info: {
		first_name: string;
		nationality: string;
		email: string;
	};
	employment_info: {};
	bank_info: {};
};

const DashboardHomepage = () => {
	const tableHeader = ["Status", "Status", "Name", "Decision Date"];

	const fetcher = (page = 0) => {
		return axiosInstance("/kyc-submissions");
	};
	const { data, isLoading, isPlaceholderData } = useQuery({
		queryKey: ["get_kycs"],
		//@ts-ignore
		queryFn: fetcher,
		// placeholderData: keepPreviousData,
		retry: 3,
	});

	const [searchValues, setSearchValues] = useState<ReturnType[]>([]);

	useEffect(() => {
		// if (data?.data) {
		// 	setSearchValues(data.data);
		// }
		if (apiMockedData) {
			setSearchValues(apiMockedData);
		}
	}, [data]);

	const pedingReviews = searchValues.filter((item) => item.status === "queue");
	const approvedReviews = searchValues.filter(
		(item) => item.status === "accepted",
	);
	const rejectedReviews = searchValues.filter(
		(item) => item.status === "rejected",
	);

	const dashboardStat = [
		{
			title: "Total",
			bg: "#EFF8FF",
			number: searchValues?.length,
		},
		{
			title: "Pending",
			bg: "#FFEBC6;",
			number: pedingReviews?.length,
		},
		{
			title: "Approved",
			bg: "#ECFDF3",
			number: approvedReviews?.length,
		},
		{
			title: "Rejected",
			bg: "#FDF2FA",
			number: rejectedReviews?.length,
		},
	];

	return (
		//@ts-ignore
		<DashboardLayout title="Home">
			<Flex gap="1em" flexWrap={"wrap"} justifyContent={"space-between"}>
				{dashboardStat.map((_, key) => {
					return (
						<Box
							w={["100%", "100%", "270px"]}
							border="1px solid var(--primary-gray)"
							py="2em"
							px="1em"
							borderRadius={"lg"}
							display="flex"
							gap="1em"
							alignItems={"center"}
							key={key}
						>
							<Box
								w="50px"
								display={"flex"}
								alignItems={"center"}
								justifyContent={"center"}
								h="50px"
								borderRadius={"50%"}
								bg={_.bg}
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="31"
									height="31"
									viewBox="0 0 31 31"
									fill="none"
								>
									<path
										d="M15.9249 19.3125C11.9584 19.3125 8.43103 21.2577 6.18531 24.2763C5.70197 24.926 5.4603 25.2509 5.46821 25.6899C5.47431 26.0291 5.68402 26.457 5.94679 26.6664C6.2869 26.9375 6.75822 26.9375 7.70085 26.9375H24.149C25.0916 26.9375 25.563 26.9375 25.9031 26.6664C26.1658 26.457 26.3755 26.0291 26.3816 25.6899C26.3896 25.2509 26.1479 24.926 25.6645 24.2763C23.4188 21.2577 19.8914 19.3125 15.9249 19.3125Z"
										stroke="black"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
									<path
										d="M15.9249 15.5C19.0346 15.5 21.5555 12.9396 21.5555 9.78125C21.5555 6.62287 19.0346 4.0625 15.9249 4.0625C12.8153 4.0625 10.2944 6.62287 10.2944 9.78125C10.2944 12.9396 12.8153 15.5 15.9249 15.5Z"
										stroke="black"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
								</svg>
							</Box>
							<Box>
								<Text fontSize={"17px"} fontWeight={500}>
									{_.title}
								</Text>
								<Text fontWeight={"semibold"} fontSize={"32px"}>
									{_.number}
								</Text>
							</Box>
						</Box>
					);
				})}
			</Flex>
			<Box my="2em">
				{isLoading ? (
					<IsLoadingData />
				) : (
					<ActionContainer title="Applications">
						{searchValues?.length === 0 ? (
							<Box overflow={"none"}>
								<NoDataFound />
							</Box>
						) : (
							<DefaultTable tableHeader={tableHeader}>
								<>
									{searchValues?.map(
										(
											{
												user_info,

												status,

												created_at,
											},
											key: number,
										) => {
											const nationality = user_info?.nationality;
											let flag;

											switch (nationality.toLowerCase()) {
												case "nigeria":
													flag = "NG";
													break;
												case "india":
													flag = "IN";
													break;
												case "indonesia":
													flag = "ID";
													break;
												default:
													break;
											}

											return (
												<Tr color={"brand.dark_text"} key={key}>
													<Td>{key + 1}</Td>
													<Td>
														<BadgeSchema>
															{status === "queue"
																? "Pending"
																: capitalizeFirstLetter(status)}
														</BadgeSchema>
													</Td>
													<Td>
														<Flex gap=".9em" alignItems={"center"}>
															<Box
																w="40px"
																h="35px"
																backgroundImage={`https://flagsapi.com/${flag}/flat/64.png`}
																borderRadius={"30px"}
																backgroundRepeat={"no-repeat"}
																backgroundSize={"contain"}
																backgroundPosition={"center"}
															></Box>
															<Box>
																<Text color={"black"}>
																	{user_info?.first_name}
																</Text>
																<Text my="5px" color="#475467">
																	{user_info?.email}
																</Text>
															</Box>
														</Flex>
													</Td>
													<Td>{moment(created_at).format("ll")}</Td>
													{/* <Td>
											<Flex gap=".5em" alignItems={"center"}>
												<BadgeSchema
													background="blue.100"
													radius="50px"
													color="blue"
												>
													update
												</BadgeSchema>
												<BadgeSchema
													radius="50px"
													background="blue.100"
													color="blue"
												>
													update
												</BadgeSchema>

												<Menu>
													<MenuButton>
														<Box
															bg="blue.100"
															borderRadius={"50%"}
															color={"blue"}
															w="35px"
															h="35px"
															cursor={"pointer"}
															display={"flex"}
															alignItems={"center"}
															justifyContent={"center"}
														>
															<Text fontSize={"12px"} fontWeight={500}>
																2+
															</Text>
														</Box>
													</MenuButton>
													<MenuList>
														<MenuItem>
															<Flex gap=".5em" alignItems={"center"}>
																<BadgeSchema
																	radius="50px"
																	background="blue.100"
																	color="blue"
																>
																	update
																</BadgeSchema>
																<BadgeSchema
																	radius="50px"
																	background="blue.100"
																	color="blue"
																>
																	update
																</BadgeSchema>
															</Flex>
														</MenuItem>
													</MenuList>
												</Menu>
											</Flex>
										</Td> */}
												</Tr>
											);
										},
									)}
								</>
							</DefaultTable>
						)}
					</ActionContainer>
				)}
			</Box>
		</DashboardLayout>
	);
};

export default withQueryClient(DashboardHomepage);
