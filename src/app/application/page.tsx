import DashboardLayout from "@/layouts/dashboard_layout";
import Applications from "@/pages/dashboard/applications";
import React from "react";

const Page = () => {
	return (
		//@ts-ignore
		<DashboardLayout title="Applications" isBack={true}>
			Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat exercitationem autem sed sunt doloribus id nisi soluta nam. Eligendi numquam magnam provident eius aliquam deserunt veritatis dolore voluptate, doloremque nulla.
			<Applications />
		</DashboardLayout>
	);
};

export default Page;
