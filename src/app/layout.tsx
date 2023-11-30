import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ChakraWrapper } from "@/layouts/chakraLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Kyc Application",
	description: "Sinbad KYC Application",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<ChakraWrapper>{children}</ChakraWrapper>
			</body>
		</html>
	);
}
