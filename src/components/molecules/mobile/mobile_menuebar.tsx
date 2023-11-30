"use client";
import { Box, Text, Flex } from "@chakra-ui/react";
import { DashboardNavItems } from "@/assets/svgs/dashboard_svgs";
import { usePathname } from "next/navigation";
import { Fragment } from "react";
import Link from "next/link";

const MobileMenuBar = () => {
	const path = usePathname();
	return (
		<Box display={["block", "none"]}>
			<Flex>
				<Box
					width={"100%"}
					justifyContent={"space-evenly"}
					borderTop="1px solid var(--primary-gray)"
					py="20px"
					position={"fixed"}
					bottom={0}
					background={"white"}
				>
					<Box
						display={"flex"}
						justifyContent={"space-around"}
						alignItems={"center"}
					>
						{DashboardNavItems.map((_, key) => {
							const matchRoute = path === _.path;
							return (
								<Fragment key={key}>
									<Link href={_.path}>
										<Box
											bg={matchRoute ? "shades.primary" : ""}
											display={"flex"}
											alignItems={"center"}
											justifyContent={"center"}
											borderRadius={"6px"}
											w={"48px"}
											h={"48px"}
										>
											{_.component}
										</Box>
									</Link>
								</Fragment>
							);
						})}
					</Box>
				</Box>
			</Flex>
		</Box>
	);
};

export default MobileMenuBar;
