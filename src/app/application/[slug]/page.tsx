"use client";
import DashboardLayout from "@/layouts/dashboard_layout";
import { Text, Flex, Box, useToast } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import ContentViewContainer from "@/components/organisms/content_view_container";
import { DefaultButton } from "@/components/atom/button";
import { BiUserCheck } from "react-icons/bi";
import { FiUserX } from "react-icons/fi";
import ProfileView from "../views/_profile_view";
import ChecksView from "../views/checks";
import EmploymentView from "../views/_employement_view";
import BankStatementView from "../views/_bank_statement_view";
import UtilityView from "../views/utilities_view";
import Esignature from "../views/_Esignature";
import { useMutation, useQuery } from "@tanstack/react-query";
import { withQueryClient } from "@/HOC/withQueryClient";
import { axiosInstance } from "@/config/axios";
import { useParams, useSearchParams } from "next/navigation";
import { AxiosError } from "axios";

const Page = () => {
	const params = useSearchParams();
	const toast = useToast();
	//@ts-ignore
	const { slug } = useParams();
	const packageId = params?.get("packageId");

	const url = `/packages/${packageId}/kyc-submissions/${slug}`;
	const applicationId = params?.get("app_id");
	const passport_no = params?.get("passport_no");
	const { data, isError, error } = useQuery({
		queryKey: ["fetch_kyc_user"],
		queryFn: () => {
			return axiosInstance(url);
		},
	});

	const [apiData, setData] = useState();

	useEffect(() => {
		if (data?.data) {
			const response = data?.data;
			setData(response);
		}
	}, [data, error]);

	//@ts-ignore
	const userInfo = apiData?.user_info;
	//@ts-ignore
	const passportInfo = apiData?.passport_info;
	//@ts-ignore
	const checklist = apiData?.checklist;
	//@ts-ignore
	const bankInfo = apiData?.bank_info;
	//@ts-ignore
	const employementInfo = apiData?.employement_info;
	//@ts-ignore
	const addressInfo = apiData?.address_info;

	//handle actions ( Accept / Reject )
	const actionMutation = useMutation({
		mutationFn: ({
			id,
			packageId,
			values,
		}: {
			id: string;
			packageId: any;
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
		onError: (err: AxiosError) => {
			//@ts-ignore
			const errMsg = err?.response?.data?.message;
			toast({
				status: "error",
				title: "Opppps!!!",
				description: errMsg,
				position: "top",
			});
		},
	});

	const actionHolder = (
		<Flex gap="1em">
			<DefaultButton
				gap=".5em"
				bg="none"
				border={"1px solid var(--primary-error)"}
				onClick={() =>
					actionMutation.mutate({
						packageId: packageId,
						id: slug,
						values: { status: "rejected" },
					})
				}
			>
				<FiUserX size="1.4em" color="var(--primary-error)" />
				<Text color={"alert.error"}>Reject</Text>
			</DefaultButton>
			<DefaultButton
				bg="none"
				border={"1px solid var(--primary-success)"}
				onClick={() =>
					actionMutation.mutate({
						packageId: packageId,
						id: slug,
						values: { status: "accepted" },
					})
				}
			>
				<BiUserCheck size="1.4em" gap=".5em" color="var(--primary-success)" />{" "}
				<Text color={"brand.success"}>Accept</Text>
			</DefaultButton>
		</Flex>
	);

	return (
		//@ts-ignore
		<DashboardLayout
			title={`Ref - ${passport_no || "No Passport Number"} `}
			headerContent={actionHolder}
		>
			<Box display={"flex"} flexDir={"column"} gap="1.5em">
				<ContentViewContainer title="Profile">
					<ProfileView
						first_name={userInfo?.first_name}
						last_name={userInfo?.last_name}
						nationality={userInfo?.nationality}
						email={userInfo?.email}
						phone_number={userInfo?.phone_number}
						address={userInfo?.address}
						passport_front={passportInfo?.passport_front_link}
						passport_face={passportInfo?.passport_face_link}
						passport_number={passportInfo?.passport_number}
						date_of_birth={passportInfo?.date_of_birth}
						place_of_birth={passportInfo?.place_of_birth}
						sex={passportInfo?.sex}
						expiry_date={passportInfo?.expiry_date}
						passport_authroity={passportInfo?.authority}
						issued_date={passportInfo?.issued_date}
					/>
				</ContentViewContainer>
				<ContentViewContainer title="Risk Checks">
					<ChecksView
						email_check={userInfo?.email}
						address_check={userInfo?.address}
						salary_check={employementInfo?.average_salary}
						passport_check={passportInfo?.passportInfo?.passport_front_link}
						employment_check={employementInfo?.employment_status}
						account_check={bankInfo?.account_balance}
					/>
				</ContentViewContainer>
				<ContentViewContainer title="Employment Information">
					<EmploymentView
						letter_link={employementInfo?.employment_letter_link || ""}
						status={employementInfo?.employment_status}
					/>
				</ContentViewContainer>
				<ContentViewContainer title="Bank Statment">
					<BankStatementView
						country={userInfo?.nationality}
						bank_country={userInfo?.nationality}
						bank_name={bankInfo?.bank_name}
						bank_holder_name={bankInfo?.account_holder_name}
						account_balance={bankInfo?.account_balance}
						currency=""
					/>
				</ContentViewContainer>
				<ContentViewContainer title="Address & Utility Bill">
					<UtilityView
						city=""
						address={userInfo?.address}
						utility_bill_url=""
					/>
				</ContentViewContainer>
				<ContentViewContainer title="User Behaviour">
					<Esignature />
				</ContentViewContainer>
			</Box>
		</DashboardLayout>
	);
};

export default withQueryClient(Page);
