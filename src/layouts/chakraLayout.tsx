"use client";
import { theme } from "@/config/theme";
import TanstackProvider from "@/providers/queryProvider";
import { ChakraProvider } from "@chakra-ui/react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export function ChakraWrapper({ children }: { children: React.ReactNode }) {
	return (
		<TanstackProvider>
			<ChakraProvider theme={theme}>{children}</ChakraProvider>
			<ReactQueryDevtools initialIsOpen={false} />
		</TanstackProvider>
	);
}
