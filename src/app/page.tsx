import DashboardHomepage from "@/pages/dashboard/home";

export default function Home() {
	if (typeof window !== "undefined") {
		window.location.href = "/auth";
	}
	return (
		<>
			<DashboardHomepage />
		</>
	);
}
