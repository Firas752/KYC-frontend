import { ClerkProvider } from "@clerk/nextjs";
import React from "react";

export function withClerkProvider(Component: any) {
	return function WrappedComponent(props: React.JSX.IntrinsicAttributes) {
		return (
			<ClerkProvider>
				<Component {...props} />
			</ClerkProvider>
		);
	};
}
