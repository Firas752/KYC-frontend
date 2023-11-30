import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";

const defaultQueryClient = new QueryClient();

export function withQueryClient(Component: any) {
	return function WrappedComponent(props: React.JSX.IntrinsicAttributes) {
		return (
			<QueryClientProvider client={defaultQueryClient}>
				<Component {...props} />
			</QueryClientProvider>
		);
	};
}
