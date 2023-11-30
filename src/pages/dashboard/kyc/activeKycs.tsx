"use client";
import React from "react";
import ActionContainer from "@/components/organisms/action_container";
import DefaultTable from "@/components/molecules/table";
import { Tr, Td, Box, Text, Flex, useToast } from "@chakra-ui/react";
import { copyToClipboard } from "@/utils/copy_to_clipboard";
import { useRouter } from "next/navigation";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import { axiosInstance } from "@/config/axios";
import moment from "moment";
import NoDataFound from "@/components/atom/noDataFound";
import { useTanstackQuery } from "@/hooks/useTanstack";
import { withQueryClient } from "@/HOC/withQueryClient";
import { AxiosError } from "axios";
import IsLoadingData from "@/components/atom/isLoadingData";

const tableHeader = ["Name", "Date Created", "Link", "Action"];

type ReturnType = {
	id: string;
	created_at: string;
	updated_at: string;
	name: string;
	description: string;
	logo_url: string;
	risk_parameter_id: string;
	KycSubmissions: string;
	org_id: string;
};

const ActiveKycs = () => {
	const currentURL =
		typeof window !== "undefined" ? window.location.origin : "";
	const origin = currentURL;
	const generateUrl = origin;
	const router = useRouter();
	const toast = useToast();
	const queryClient = useTanstackQuery();

	const copyAddress = (id: string) =>
		copyToClipboard({
			data: `${generateUrl}/${id}/onboarding`,
			message: "Address has been copied successfully",
		});

	const { data, isError, error, isLoading } = useQuery({
		queryKey: ["fetch_packages"],
		queryFn: () => axiosInstance("/packages"),
		retry: 3,
	});

	const [searchValue, setSearchValue] = useState<ReturnType[]>([]);

	useEffect(() => {
		if (data?.data) {
			setSearchValue(data.data);
		}
	}, [data]);

	const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value.toLowerCase().trim();
		const filteredData = data?.data.filter((item: ReturnType) => {
			return item.name.toLowerCase().includes(value);
		});
		setSearchValue(filteredData);
	};

	const deletePackage = useMutation({
		mutationFn: (id) => axiosInstance.delete(`/packages/${id}`),
		onSuccess: () => {
			queryClient.invalidateQueries();
			toast({
				status: "success",
				title: "Deleted",
				description: "Package deleted successfully",
				position: "top",
			});
		},
		onError: (err: AxiosError) => {
			//@ts-ignore
			const errMsg = err?.response?.data?.message;
			toast({
				status: "error",
				title: err?.message,
				description: errMsg,
				position: "top",
			});
		},
	});

	const handleDelete = (id: any) => deletePackage.mutate(id);

	if (isLoading) {
		return <IsLoadingData />;
	}

	if (isError) {
		return (
			<>
				<NoDataFound />
			</>
		);
	}

	return (
		<div>
			<ActionContainer title="Package Links" onChange={handleSearch}>
				<Box>
					{searchValue?.length === 0 ? (
						<NoDataFound />
					) : (
						<>
							<DefaultTable tableHeader={tableHeader}>
								{searchValue?.map((_: ReturnType, key: number) => {
									const splitUrl = _?.id.split("-")[0];

									return (
										<Tr color={"brand.dark_text"} key={key}>
											<Td>{_?.name}</Td>

											<Td>{moment(_?.updated_at).format("ll")}</Td>
											<Td>
												<Box
													bg="#ECF8FD"
													w={["fit-content"]}
													px="1.1em"
													py="8px"
													borderRadius="1em"
												>
													<Box
														display={"flex"}
														alignItems="center"
														justifyContent={"space-between"}
														gap="1.5em"
													>
														<Box>
															<Text color="alert.info" fontSize={"15px"}>
																{`${generateUrl}/${splitUrl}`}
															</Text>
														</Box>

														<Box
															cursor={"pointer"}
															onClick={() => copyAddress(_?.id)}
														>
															<svg
																xmlns="http://www.w3.org/2000/svg"
																width="20"
																height="20"
																viewBox="0 0 20 20"
																fill="none"
															>
																<path
																	d="M6.25 2.5H12.1667C14.0335 2.5 14.9669 2.5 15.68 2.86331C16.3072 3.18289 16.8171 3.69282 17.1367 4.32003C17.5 5.03307 17.5 5.96649 17.5 7.83333V13.75M5.16667 17.5H11.9167C12.8501 17.5 13.3168 17.5 13.6733 17.3183C13.9869 17.1586 14.2419 16.9036 14.4017 16.59C14.5833 16.2335 14.5833 15.7668 14.5833 14.8333V8.08333C14.5833 7.14991 14.5833 6.6832 14.4017 6.32668C14.2419 6.01308 13.9869 5.75811 13.6733 5.59832C13.3168 5.41667 12.8501 5.41667 11.9167 5.41667H5.16667C4.23325 5.41667 3.76654 5.41667 3.41002 5.59832C3.09641 5.75811 2.84144 6.01308 2.68166 6.32668C2.5 6.6832 2.5 7.14991 2.5 8.08333V14.8333C2.5 15.7668 2.5 16.2335 2.68166 16.59C2.84144 16.9036 3.09641 17.1586 3.41002 17.3183C3.76654 17.5 4.23325 17.5 5.16667 17.5Z"
																	stroke="#2158E5"
																	stroke-width="2"
																	stroke-linecap="round"
																	stroke-linejoin="round"
																/>
															</svg>
														</Box>
													</Box>
												</Box>
											</Td>
											<Td>
												<Flex gap="1em">
													<Text
														color={"alert.error"}
														fontWeight={"semibold"}
														cursor="pointer"
														fontSize={"14px"}
														onClick={() => handleDelete(_?.id)}
													>
														Delete
													</Text>
												</Flex>
											</Td>
										</Tr>
									);
								})}
							</DefaultTable>
						</>
					)}
				</Box>
			</ActionContainer>
		</div>
	);
};

export default withQueryClient(ActiveKycs);
