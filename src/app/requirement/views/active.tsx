import React, { useState, useEffect } from "react";
import ActionContainer from "@/components/organisms/action_container";
import DefaultTable from "@/components/molecules/table";
import { Tr, Td, Box, Text, Flex, useToast } from "@chakra-ui/react";
import Link from "next/link";
import { useMutation, useQuery } from "@tanstack/react-query";
import { axiosInstance } from "@/config/axios";
import moment from "moment";
import NoDataFound from "@/components/atom/noDataFound";
import { useTanstackQuery } from "@/hooks/useTanstack";
import { withQueryClient } from "@/HOC/withQueryClient";
import { AxiosError } from "axios";

type ReturnType = {
	id: string;
	created_at: string;
	updated_at: string;
	name: string;
	account_balance: number;
	average_salary: number;
	employment_status: boolean;
	org_id: string;
};

const tableHeader = ["Reference", "Name", "Created Date", ""];

const ActiveRequirements = () => {
	const toast = useToast();
	const queryClient = useTanstackQuery();

	const { data, isError, error, isLoading } = useQuery({
		queryKey: ["fetch_requirements"],
		queryFn: () => axiosInstance("/risk-parameters"),
		retry: 3,
	});

	const [searchValue, setSearchValue] = useState<ReturnType[]>([]);

	useEffect(() => {
		if (data?.data) {
			setSearchValue(data.data);
		}
	}, [data]);

	const deleteRequirement = useMutation({
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
		onError: (err: AxiosError) => {
			//@ts-ignore
			const errMsg = err?.response?.data?.message;

			toast({
				status: "error",
				title: "Oppps!!!",
				description: errMsg,
				position: "top",
			});
		},
	});

	const handleDelete = (id: any) => deleteRequirement.mutate(id);

	const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value.toLowerCase();
		const filteredData = data?.data.filter((item: ReturnType) => {
			return item.name.toLowerCase().includes(value);
		});
		setSearchValue(filteredData);
	};

	return (
		<div>
			<ActionContainer title="Requirements" onChange={handleSearch}>
				<Box>
					{searchValue?.length === 0 ? (
						<NoDataFound />
					) : (
						<DefaultTable tableHeader={tableHeader}>
							{searchValue?.map((item, key) => (
								<Tr color={"brand.dark_text"} key={key}>
									<Td>{key + 1}</Td>
									<Td>{item?.name}</Td>
									<Td>{moment(item?.created_at).format("ll")}</Td>
									<Td>
										<Flex gap={"2em"}>
											<Text
												color={"alert.error"}
												fontWeight={"semibold"}
												cursor="pointer"
												fontSize={"14px"}
												onClick={() => handleDelete(item?.id)}
											>
												Delete
											</Text>
											<Link
												href={{
													pathname: `/requirement/${item?.id}/edit`,
													query: {
														name: item?.name,
														account_balance: item?.account_balance,
														average_salary: item?.average_salary,
														employment_status: item?.employment_status,
													},
												}}
											>
												<Text
													color={"brand.success"}
													fontWeight={"semibold"}
													cursor="pointer"
													fontSize={"14px"}
												>
													Edit
												</Text>
											</Link>
											{/* <Text
												color={"alert.info"}
												fontWeight={"semibold"}
												cursor="pointer"
												fontSize={"14px"}
											>
												View
											</Text> */}
										</Flex>
									</Td>
								</Tr>
							))}
						</DefaultTable>
					)}
				</Box>
			</ActionContainer>
		</div>
	);
};

export default withQueryClient(ActiveRequirements);
