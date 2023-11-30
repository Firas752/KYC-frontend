import { DefaultButton } from "@/components/atom/button";
import { InputField } from "@/components/atom/input";
import { GOOGLE_ICON } from "@/constant/svgs";
import { Box, Checkbox, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";

const Page = () => {
	return (
		<Box>
			<form>
				<InputField
					name="fullname"
					type="text"
					label="Full Name"
					placeholder="Enter your fullname "
				/>
				<InputField
					name="Email"
					type="email"
					label="Email"
					placeholder="Enter your email "
				/>

				<InputField
					name="password"
					type="password"
					label="Password"
					placeholder="******"
				/>

				<Flex
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
				</Flex>

				<DefaultButton mt="1.5em" w="100%" type="submit">
					Sign up
				</DefaultButton>

				<DefaultButton
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
						Already had an Account?{" "}
						<Link href={"/auth"}>
							<span
								style={{
									color: "var(--primary)",
									fontWeight: "bold",
								}}
							>
								Sign in
							</span>
						</Link>
					</Text>
				</Box>
			</form>
		</Box>
	);
};

export default Page;
