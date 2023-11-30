import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { getCookie } from "cookies-next";

const isAuthenticated = (WrapperFunction: React.ComponentType) => {
	const AuthWrapper = (props: any) => {
		const router = useRouter();
		useEffect(() => {
			const hasToken = getCookie("auth_access_token");
			if (!hasToken) {
				router.replace("/auth");
			}
		}, []);

		return <WrapperFunction {...props} />;
	};

	return AuthWrapper;
};

export default isAuthenticated;
