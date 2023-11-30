import { authMiddleware } from "@clerk/nextjs";
export default authMiddleware({
	publicRoutes: [
		"/:id/onboarding",
		"/:id/onboarding/next",
		"/:id/onboarding/nationality",
		"/:id/onboarding/personal-info",
		"/:id/onboarding/signature",
		"/:id/onboarding/task",
	],
});

export const config = {
	matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
