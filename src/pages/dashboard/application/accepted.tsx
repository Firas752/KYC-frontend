//@ts-nocheck
"use client";
import React, { useState } from "react";
import ActionContainer from "@/components/organisms/action_container";
import DefaultTable from "@/components/molecules/table";
import { Tr, Td, Box, Text, Flex } from "@chakra-ui/react";
import BadgeSchema from "@/components/atom/badge";
import Link from "next/link";
import { applicationData } from "@/data/application_data";
import NoDataFound from "@/components/atom/noDataFound";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { axiosInstance } from "@/config/axios";
import { useToast } from "@chakra-ui/react";
import moment from "moment";
import { useTanstackQuery } from "@/hooks/useTanstack";
import { withQueryClient } from "@/HOC/withQueryClient";
import { capitalizeFirstLetter } from "@/utils/capitalize_first_word";
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
		last_name: string;
		email: string;
		id_number: string;
	};
	passport_info: {
		passport_number: string;
	};
	employment_info: {};
	bank_info: {};
};

const tableHeader = [
	"Reference",
	"Status",
	"Name",
	"Submission",
	// "Tags",
	"Actions",
];

const AcceptedApplications = () => {
	const [searchValue, setSearchValue] = useState(applicationData);
	const toast = useToast();

	//handle search
	const handleSearch = (event: any) => {
		const value = event.target.value.toLowerCase();
		const filteredData = applicationData.filter((data: any) => {
			return data.name.toLowerCase().includes(value);
		});
		//@ts-ignore
		setSearchValue(filteredData);
	};

	const { data, isError, error, isLoading } = useQuery({
		queryKey: ["fetch_kyc_verifications"],
		queryFn: () => axiosInstance("/kyc-submissions"),
		retry: 3,
	});

	const [searchValues, setSearchValues] = useState<ReturnType[]>([]);

	useEffect(() => {
		// if (data?.data) {
		// 	const filteredData = data?.data.filter(
		// 		(item: ReturnType) => item.status === "accepted",
		// 	);

		// 	setSearchValues(filteredData);
		// }
		if (apiMockedData) {
			const filteredData = apiMockedData.filter(
				(item: ReturnType) => item.status === "accepted",
			);

			setSearchValues(filteredData);
		}
		
	}, [data]);

	const deleteVerification = useMutation({
		mutationFn: (id) => axiosInstance.delete(`/risk-parameters/${id}`),
		onSuccess: () => {
			//@ts-ignore
			queryClient.invalidateQueries(["fetch_requirements"]);
			toast({
				status: "success",
				title: "Deleted",
				description: "Requirement deleted successfully",
				position: "top",
			});
		},
		onError: (err) => {
			toast({
				status: "error",
				title: err?.message,
				description: "An issue occurred",
				position: "top",
			});
		},
	});

	const handleDelete = (id: any) => deleteVerification.mutate(id);
	const handleSearchBar = (event: React.ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value.toLowerCase().trim();
		const filteredData = data?.data
			.filter((item: ReturnType) => item.status === "accepted")
			.filter((item: ReturnType | null) => {
				return (
					//@ts-ignore
					item.user_info.first_name.toLowerCase().includes(value) ||
					//@ts-ignore
					item.user_info.nationality.toLowerCase().includes(value)
				);
			});
		setSearchValues(filteredData);
	};

	//handle actions ( Accept / Reject )
	const actionMutation = useMutation({
		mutationFn: ({
			id,
			packageId,
			values,
		}: {
			id: string;
			packageId: string;
			values: {};
		}) =>
			axiosInstance.put(`/packages/${packageId}/kyc-submissions/${id}`, values),
		onSuccess: () => {
			toast({
				status: "success",
				title: "Updated",
				description: "Item updated successfully",
				position: "top",
			});
		},
		onError: (err) => {
			toast({
				status: "error",
				title: "Opppps!!!",
				description: err?.message,
				position: "top",
			});
		},
	});

	return (
		<div>
			<ActionContainer title="Accepted Applications" onChange={handleSearchBar}>
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
										id,
										package_id,

										status,
										passport_info,
										employment_info,
										bank_info,
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
													{capitalizeFirstLetter(status)}
												</BadgeSchema>
											</Td>
											<Td>
												<Flex gap=".9em" alignItems={"center"}>
													<Box
														w="40px"
														h="35px"
														backgroundImage={`https://flagsapi.com/ID/flat/64.png`}
														// backgroundImage={`https://flagsapi.com/${flag}/flat/64.png`}
														borderRadius={"30px"}
														backgroundRepeat={"no-repeat"}
														backgroundSize={"contain"}
														backgroundPosition={"center"}
													></Box>
													<Box>
														<Text color={"black"}>{user_info?.first_name}</Text>
														<Text my="5px" color="#475467">
															{user_info?.email}
														</Text>
													</Box>
												</Flex>
											</Td>
											<Td>{moment(created_at).format("ll")}</Td>

											<Td>
												<Flex gap="1em">
													<Text
														color={"alert.error"}
														fontWeight={"600"}
														cursor="pointer"
														fontSize={"14px"}
														onClick={() =>
															actionMutation.mutate({
																packageId: package_id,
																id: id,
																values: { status: "rejected" },
															})
														}
													>
														Reject
													</Text>
													<Text
														color={"brand.success"}
														fontWeight={"600"}
														cursor="pointer"
														fontSize={"14px"}
														onClick={() =>
															actionMutation.mutate({
																packageId: package_id,
																id: id,
																values: { status: "accepted" },
															})
														}
													>
														Accept
													</Text>
													<Link
														href={{
															pathname: `/application/${id}`,
															query: {
																packageId: package_id,
																first_name: user_info?.first_name,
																last_name: user_info?.last_name,
																// app_id: user_info?.id_number,
																passport_no: passport_info?.passport_number,
															},
														}}
													>
														<Text
															color={"alert.info"}
															fontWeight={"600"}
															cursor="pointer"
															fontSize={"14px"}
														>
															View
														</Text>
													</Link>
												</Flex>
											</Td>
										</Tr>
									);
								},
							)}
						</>
					</DefaultTable>
				)}
			</ActionContainer>
		</div>
	);
};

export default withQueryClient(AcceptedApplications);
