import { Box, Text } from "@chakra-ui/react";
import { FC, ReactNode } from "react";

interface ContentProps {
	title: string;
	children: ReactNode;
}

const ContentViewContainer: FC<ContentProps> = ({ children, title }) => {
	return (
		<Box
			border={"1px solid var(--primary-gray)"}
			borderRadius="10px"
			position={"relative"}
			overflow={"hidden"}
		>
			<Box bg="shades.primary" py="10px" px="20px">
				<Text fontWeight={600} fontSize={["20px", "18px"]}>
					{title}
				</Text>
			</Box>

			<Box my="2em" px="20px">
				{children}
			</Box>
		</Box>
	);
};

export default ContentViewContainer;
