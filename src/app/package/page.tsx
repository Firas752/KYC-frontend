import DashboardLayout from "@/layouts/dashboard_layout";
import Applications from "@/pages/dashboard/applications";
import React from "react";

const Page = () => {
	return (
		<DashboardLayout title="Applications" isBack={true}>
			<Applications />
		</DashboardLayout>
	);
};

export default Page;
