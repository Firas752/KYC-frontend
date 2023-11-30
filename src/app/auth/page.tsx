"use client";
import { DefaultButton } from "@/components/atom/button";
import { InputField } from "@/components/atom/input";
// import { GOOGLE_ICON } from "@/constant/svgs";
import { Box } from "@chakra-ui/react";
import { supabase } from "@/config/supabase";
import { ChangeEvent, useState } from "react";
import { useToast } from "@chakra-ui/react";
import { AuthApiError } from "@supabase/supabase-js";
import { setCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { useStore } from "@/zustand/store";

const SignInPage = () => {
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const toast = useToast();
	const router = useRouter();

	const { updateAuthData } = useStore();

	const handleLogin = async (e: any) => {
		e.preventDefault();
		try {
			setIsLoading(true);
			const { data, error } = await supabase.auth.signInWithPassword({
				email: email,
				password: password,
			});

			if (error) throw error;

			if (data) {
				const { access_token } = data.session;
				const users = data.user;
				const { identities } = users;

				updateAuthData(identities);

				setCookie("auth_access_token", access_token, {
					maxAge: 30 * 60,
				});
				toast({
					description: "Redirecting to Dashboard",
					status: "success",
					position: "top",
					title: "Logged in successfully",
				});

				setTimeout(() => router.replace("/"), 3000);
			}
		} catch (err) {
			if (err instanceof AuthApiError) {
				console.log();
				toast({
					description: "Password or Email is incorrect",
					status: "error",
					position: "top",
					title: err?.message,
				});
			}
		} finally {
			setIsLoading(false);
		}
	};

	//handle set states
	const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) =>
		setEmail(e.target.value);
	const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) =>
		setPassword(e.target.value);

	return (
		<Box>
			<form onSubmit={handleLogin}>
				<InputField
					name="Email"
					type="email"
					label="Email"
					placeholder="Enter your email "
					onChange={handleEmailChange}
					isRequired
				/>

				<InputField
					name="password"
					type="password"
					label="Password"
					placeholder="******"
					onChange={handlePasswordChange}
					isRequired
				/>

				{/* <Flex
					justifyContent={"space-between"}
					flexDir={["column", "column", "row"]}
					gap=".8em"
				>
					<Checkbox>Remeber for 30 days</Checkbox>

					<Link href="/auth/forgotten-password">
						<Text color="brand.primary" fontWeight={600}>
							Forgotten Password
						</Text>
					</Link>
				</Flex> */}

				<DefaultButton type="submit" mt="1.5em" w="100%" isLoading={isLoading}>
					Sign in
				</DefaultButton>

				{/* <DefaultButton
					bg="none"
					color="black"
					w="100%"
					border={"1px solid var(--primary-gray)"}
					gap=".5em"
				>
					{GOOGLE_ICON} Sign in with Google
				</DefaultButton>

				<Box my="0.1em" textAlign={"center"} color={"brand.secondary"}>
					<Text>
						Don’t have an account?{" "}
						<Link href={"/auth/signup"}>
							<span
								style={{
									color: "var(--primary)",
									fontWeight: "bold",
								}}
							>
								Sign up
							</span>
						</Link>
					</Text>
				</Box> */}
			</form>
		</Box>
	);
};

export default SignInPage;
