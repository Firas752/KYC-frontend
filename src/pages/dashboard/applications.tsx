/* eslint-disable react/jsx-key */
import CustomTab from "@/components/molecules/tab";
import React from "react";
import PendingApplications from "./application/pending";
import AcceptedApplications from "./application/accepted";
import RejectedApplications from "./application/rejected";
import AllApplications from "./application/all";

const Applications = () => {
	// const lists = ["Pending", "Accepted", "Rejected"];
	const lists = ["All Applications"];

	const applicationListItems: JSX.Element[] = [
		// <AllApplications />,
		// <PendingApplications />,
		<AcceptedApplications />,
		// <RejectedApplications />,
	];
	return (
		<>
			<CustomTab tabItems={lists}>{applicationListItems}</CustomTab>
		</>
	);
};

export default Applications;
