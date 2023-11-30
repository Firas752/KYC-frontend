import { Box, Text } from "@chakra-ui/react";
import { FC, ReactNode } from "react";

interface BadgeProps {
	children: ReactNode;
	radius?: string;
	background?: string;
	color?: string;
}

const Badge: FC<BadgeProps> = ({ children, color, radius, background }) => {
	const status = children?.toString().toLowerCase();

	let bg, textColor;

	if (status === "pending" || status === "queue" || status === "Medium Risk") {
		bg = "yellow.100";
		textColor = "yellow.500";
	} else if (status === "rejected" || status === "High Risk") {
		bg = "red.100";
		textColor = "red.500";
	} else if (
		status === "Approved" ||
		status === "accepted" ||
		status === "Low Risk"
	) {
		bg = "green.100";
		textColor = "green.500";
	} else {
		bg = "green.100";
		textColor = "green.500";
	}

	return (
		<Box
			bg={background ? background : bg}
			w="fit-content"
			p="0.3em .6em"
			borderRadius={radius ? radius : "3px"}
		>
			<Text
				fontSize={color ? "12px" : "13px"}
				color={color ? color : textColor}
				fontWeight="500"
			>
				{children}
			</Text>
		</Box>
	);
};

export default Badge;
