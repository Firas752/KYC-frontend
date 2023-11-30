import Logo from "@/components/atom/logo";
import { Box, Container, Text } from "@chakra-ui/react";
import React, { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
	return (
		<Box h="100vh" display={"flex"} flexDir={["column", "column", "row"]}>
			<Box w={["100%", "100%", "40%"]} py="3em">
				<Container maxW={["90%", "70%"]}>
					<Box>
						<Logo />
					</Box>
					<Box my="3em">{children}</Box>
				</Container>
			</Box>

			<Box
				w={["100%", "100%", "60%"]}
				h={"100vh"}
				bg="gray.200"
				pos={"relative"}
				overflow={"none"}
				display={["none", "none", "block"]}
			>
				<Box w={"656px"} py="2em" mx="auto">
					<Text fontSize={"30px"}>
						Few things make me feel more powerful than setting up automations in
						Untitled to make my life easier and more efficient.
					</Text>
				</Box>
				<Box
					backgroundImage={"/images/auth_mockup.png"}
					backgroundPosition={"center"}
					backgroundRepeat={"no-repeat"}
					backgroundSize={"cover"}
					height={"70%"}
					width={"780px"}
					pos={"fixed"}
					bottom={0}
					right={0}
					border={"6px solid black"}
					borderRight={0}
					borderBottom={0}
					borderTopLeftRadius={"30px"}
				></Box>
			</Box>
		</Box>
	);
};

export default Layout;
