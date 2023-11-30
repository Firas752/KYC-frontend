"use client";
import { DefaultButton } from "@/components/atom/button";
import DashboardLayout from "@/layouts/dashboard_layout";
import React, { ChangeEvent, useState } from "react";
import { Box, Flex, Text, Switch, useToast } from "@chakra-ui/react";
import { InputField } from "@/components/atom/input";
import { useMutation } from "@tanstack/react-query";
import { axiosInstance } from "@/config/axios";
import { create_requirement_schema } from "../../../validations";
import { useFormik } from "formik";
import { AxiosError } from "axios";

const RiskContainer = ({ bg, text }: { bg: string; text: string }) => {
	return (
		<Box bg={bg} w="fit-content" py="7px" borderRadius={"10px"} px="1em">
			<Text>{text}</Text>
		</Box>
	);
};

//risk enum
enum Risks {
	HIGH = "#FBD8D8",
	MEDIUM = "#FFE5BD",
	LOW = "#BFF3B1",
}

const Page = () => {
	const [isChecked, setIsChecked] = useState(false);
	const toast = useToast();

	const defaultValue = {
		name: "",
		account_balance: "",
		average_salary: "",
		employment_status: false,
	};

	const mutation = useMutation({
		mutationFn: (value) => {
			return axiosInstance.post("/risk-parameters", value);
		},
		onSuccess: (response) => {
			toast({
				title: "Requirment created successfully",
				position: "top",
				status: "success",
			});
		},
		onError: (err: AxiosError) => {
			//@ts-ignore
			const errMsg = err?.response?.data?.message;
			toast({
				status: "error",
				title: "Oppp!!!",
				description: errMsg,
				position: "top",
			});
		},
	});

	const createRquirement = (values: any) => {
		mutation.mutate(values);
	};

	const formik = useFormik({
		initialValues: defaultValue,
		validationSchema: create_requirement_schema,
		onSubmit: createRquirement,
		validateOnChange: true,
	});

	//handle switch toggle

	const handleSwitchToggle = (e: ChangeEvent<HTMLInputElement>) => {
		setIsChecked(e.target.checked);
		formik.setFieldValue("employment_status", isChecked);
	};

	return (
		<DashboardLayout
			title="Create Requirement"
			isBack={true}
			headerContent={
				<DefaultButton
					type="submit"
					isLoading={mutation.isPending}
					loadingText={"Creating Requirment"}
					//@ts-ignore
					onClick={formik.handleSubmit}
				>
					Create
				</DefaultButton>
			}
		>
			<Box>
				<form onSubmit={formik.handleSubmit}>
					<Box>
						<InputField
							type="text"
							label=" Risk Paramaeter Nmae"
							w={["100%", "100%", "375px"]}
							borderRadius={"10px"}
							name="name"
							isInvalid={formik.errors.name ? true : false}
							errorMessage={formik.errors.name && formik.errors.name}
							onChange={formik.handleChange}
						/>
					</Box>

					{/* condition section */}
					<Box my="2em">
						<Text>Account Balance:</Text>

						<Flex my="1em" alignItems={"center"} gap="2em" pl={["", "2em"]}>
							<Box
								w={"fit-content"}
								bg="#F7F8FF"
								px="15px"
								py="8px"
								borderRadius={"10px"}
							>
								<Text fontWeight={"semibold"}> {">="} </Text>
							</Box>
							<Text>Than</Text>
							<Box w={["100%", "378px"]}>
								<InputField
									type="number"
									w={["100%", "100%"]}
									borderRadius={"10px"}
									placeholder="$1,000"
									name="account_balance"
									isInvalid={formik.errors.account_balance ? true : false}
									errorMessage={
										formik.errors.account_balance &&
										formik.errors.account_balance
									}
									onChange={formik.handleChange}
								/>
							</Box>
							<Text>, Then</Text>

							<RiskContainer text="Low Risk" bg={Risks.LOW} />
							<Text>Otherwise</Text>

							<RiskContainer text="High Risk Risk" bg={Risks.HIGH} />
						</Flex>
					</Box>

					{/* Salary condition section */}
					<Box my="2em">
						<Text>Salary:</Text>

						<Flex my="1em" alignItems={"center"} gap="2em" pl={["", "2em"]}>
							<Box
								w={"fit-content"}
								bg="#F7F8FF"
								px="15px"
								py="8px"
								borderRadius={"10px"}
							>
								<Text fontWeight={"semibold"}> {">="} </Text>
							</Box>
							<Text>Than</Text>
							<Box w={["100%", "378px"]}>
								<InputField
									type="number"
									w={["100%", "100%"]}
									borderRadius={"10px"}
									placeholder="$1,000"
									name="average_salary"
									isInvalid={formik.errors.average_salary ? true : false}
									errorMessage={
										formik.errors.average_salary && formik.errors.average_salary
									}
									onChange={formik.handleChange}
								/>
							</Box>
							<Text>Then</Text>

							<RiskContainer text="Low Risk" bg={Risks.LOW} />
							<Text>, Otherwise</Text>

							<RiskContainer text="High Risk Risk" bg={Risks.HIGH} />
						</Flex>
					</Box>

					<Box my="2em">
						<Text>Employed:</Text>

						<Box
							my="1em"
							pl={["", "2em"]}
							display={"flex"}
							alignItems={"center"}
							gap="1em"
						>
							<Text>No</Text>{" "}
							<Switch
								colorScheme="purple"
								size="md"
								name="employment_status"
								isChecked={isChecked}
								onChange={handleSwitchToggle}
							/>
							<Text>Yes</Text>
						</Box>
					</Box>
				</form>
			</Box>
		</DashboardLayout>
	);
};

export default Page;
