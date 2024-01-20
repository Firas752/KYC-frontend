"use client";
import { DefaultButton } from "@/components/atom/button";
import DashboardLayout from "@/layouts/dashboard_layout";
import KycPage from "@/pages/dashboard/kycPage";
import React, { useEffect, useState } from "react";
import { Text, Box, Flex, useDisclosure, Select } from "@chakra-ui/react";
import ModalContainer from "@/layouts/popups/modalContainer";
import { InputField } from "@/components/atom/input";
import { useFormik } from "formik";
import { create_package_schema } from "@/validations";
import { useMutation, useQuery } from "@tanstack/react-query";
import { axiosInstance } from "@/config/axios";
import { SelectInputField } from "@/components/atom/input";
import { useToast } from "@chakra-ui/react";
import { useTanstackQuery } from "@/hooks/useTanstack";
import { withQueryClient } from "@/HOC/withQueryClient";
import { AxiosError } from "axios";

type ApiData = {
	id: string;
	employment: boolean;
	name: string;
	org_id: string;
};

const Page = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [riskParameters, setRiskParameters] = useState<ApiData[]>([]);
	const toast = useToast();
	const queryClient = useTanstackQuery();

	const payload = {
		name: "",
		description: "",
		logo_link: "",
		risk_parameter_id: "",
	};

	const mutation = useMutation({
		mutationKey: ["create_package"],
		mutationFn: (data) => {
			return axiosInstance.post("/packages", data);
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["fetch_packages"] });
			toast({
				status: "success",
				position: "top",
				title: " created",
				description: "Package has been created successfully",
			});
		},
		onError: (err: AxiosError) => {
			//@ts-ignore
			const errMsg = err?.response?.data?.message;
			toast({
				status: "error",
				position: "top",
				title: " Ooops!!!",
				description: errMsg,
			});
		},
	});

	const createPackage = (data: any) => mutation.mutate(data);

	const formik = useFormik({
		initialValues: payload,
		validationSchema: create_package_schema,
		validateOnChange: true,
		onSubmit: (values) => createPackage(values),
	});

	const { data, error, isError } = useQuery({
		queryKey: ["selet_riskLevel"],
		queryFn: () => {
			return axiosInstance("/risk-parameters");
		},
	});

	useEffect(() => {
		if (data?.data) {
			const response = data?.data;
			setRiskParameters(response);
		}

		if (isError) {
			console.log(error);
		}
	}, [data, error, isError]);
	return (
		<DashboardLayout
			title="Package Links"
			headerContent={
				<DefaultButton onClick={onOpen}>
					<Flex gap=".6em" alignItems={"center"} justifyContent={"center"}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="10"
							height="10"
							viewBox="0 0 10 10"
							fill="none"
						>
							<circle cx="5" cy="5" r="4" fill="white" />
						</svg>
						<Box>
							<Text> Create Package </Text>
						</Box>
					</Flex>
				</DefaultButton>
			}
			isBack={true}
		>
			<KycPage />
			<ModalContainer isOpen={isOpen} onClose={onClose}>
				<form onSubmit={formik.handleSubmit}>
					<InputField
						type="text"
						placeholder="Enter your name"
						name="name"
						label="Package Name"
						isInvalid={formik.errors.name ? true : false}
						onChange={formik.handleChange}
						errorMessage={formik.errors.name && formik.errors.name}
					/>

					<InputField
						type="text"
						placeholder="Enter your name"
						name="description"
						label="Description"
						isInvalid={formik.errors.description ? true : false}
						onChange={formik.handleChange}
						errorMessage={
							formik.errors.description && formik.errors.description
						}
					/>
					
					<InputField
						type="text"
						placeholder="Logo"
						name="logo_link"
						label="Image"
						isInvalid={formik.errors.logo_link ? true : false}
						onChange={formik.handleChange}
						errorMessage={formik.errors.logo_link && formik.errors.logo_link}
					/>

					<SelectInputField
						onChange={formik.handleChange}
						label="Select risk parameter"
						name="risk_parameter_id"
						isInvalid={formik.errors.risk_parameter_id ? true : false}
						errorMessage={
							formik.errors.risk_parameter_id && formik.errors.risk_parameter_id
						}
					>
						<option>Select risk parameter</option>
						{riskParameters.map((item: ApiData, index: number) => {
							return (
								<option value={item?.id} key={index}>
									{item?.name}
								</option>
							);
						})}
					</SelectInputField>

					<DefaultButton
						type="submit"
						w={"100%"}
						isLoading={mutation.isPending}
						loadingText={"Creating Package"}
					>
						Create Package Link
					</DefaultButton>
				</form>
			</ModalContainer>
		</DashboardLayout>
	);
};

export default withQueryClient(Page);
