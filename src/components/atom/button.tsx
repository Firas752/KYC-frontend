import { Button, ButtonProps } from "@chakra-ui/react";
import React, { FC, ReactNode } from "react";

interface DefaultButton extends ButtonProps {
	children: ReactNode;
	bg?: string;
	color?: string;
	_hover?: any;
}

const DefaultButton: FC<DefaultButton> = ({
	_hover,
	bg,
	color,
	children,
	...rest
}) => {
	return (
		<Button
			py="24px"
			bg={bg ? bg : "brand.primary"}
			color={color ? color : "#fff"}
			px="18px"
			my=".6em"
			_hover={_hover ? _hover : "none"}
			{...rest}
		>
			{children}
		</Button>
	);
};

const MobileButton: FC<DefaultButton> = ({
	_hover,
	bg,
	color,
	children,
	...rest
}) => {
	return (
		<Button
			py="1.9em"
			bg={bg ? bg : "brand.primary"}
			color={color ? color : "#fff"}
			px="2em"
			my=".6em"
			_hover={_hover ? _hover : ""}
			borderRadius={"50px"}
			{...rest}
		>
			{children}
		</Button>
	);
};

export { DefaultButton, MobileButton };
