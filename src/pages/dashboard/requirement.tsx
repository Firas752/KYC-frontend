/* eslint-disable react/jsx-key */
import CustomTab from "@/components/molecules/tab";
import React from "react";
import ActiveRequirements from "@/app/requirement/views/active";

const RequirementPage = () => {
	const lists = ["Active"];
	console.log("asan was here with test");
	const applicationListItems: JSX.Element[] = [<ActiveRequirements />];
	return (
		<div>
			<CustomTab tabItems={lists}>{applicationListItems}</CustomTab>
		</div>
	);
};

export default RequirementPage;
