import OnboardingLayout from "@/layouts/user/onboarding";
import React from "react";
import { Box } from "@chakra-ui/react";
import { MobileButton } from "@/components/atom/button";
import Link from "next/link";

const Page = () => {
	return (
		<OnboardingLayout
			heading={`Product Test`}
			content={`All data will be deleted within 24 hours of submissions`}
		>
			<Box
				display="flex"
				gap="1em"
				width={"80%"}
				mx="auto"
				justifyContent={"center"}
				mt="4em"
			>
				<Link href="nationality">
					<MobileButton
						gap=".8em"
						w="100%"
						bg="none"
						border={"1px solid var(--primary)"}
						color="brand.primary"
					>
						Skip
					</MobileButton>
				</Link>
				<Link href="nationality">
					<MobileButton gap=".8em" w="100%">
						Next
					</MobileButton>
				</Link>
			</Box>
		</OnboardingLayout>
	);
};

export default Page;
