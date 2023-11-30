import {
	FormControl,
	FormErrorIcon,
	FormErrorMessage,
	FormLabel,
	Input,
	InputProps,
	Select,
	SelectProps,
} from "@chakra-ui/react";
import { FC, ReactNode } from "react";

interface InputField extends InputProps {
	label?: string;
	errorMessage?: string;
	isError?: boolean;
	isInvalid?: boolean;
	value?: any;
}

interface SelectInputProps extends SelectProps {
	label?: string;
	errorMessage?: any;
	isInvalid?: boolean;
	value?: any;
	children: ReactNode;
}

const InputField: FC<InputField> = ({
	label,
	isError,
	errorMessage,
	isInvalid,
	value,
	...rest
}) => {
	return (
		<FormControl my="1em" isInvalid={isInvalid}>
			<FormLabel>{label}</FormLabel>
			<Input size={"lg"} value={value} {...rest} />
			<FormErrorMessage>
				<FormErrorIcon />
				{errorMessage}
			</FormErrorMessage>
		</FormControl>
	);
};

const LabeledInput: FC<InputField> = ({
	label,
	isError,
	isInvalid,
	errorMessage,
	...rest
}) => {
	const customLabelStyle = {
		position: "absolute",
		top: "-13px",
		marginLeft: "20px",
		color: "#828282",
		zIndex: -0.5,
		backgroundColor: "#fff",
		padding: "0 .5em",
	};
	return (
		<>
			<FormControl my="2.5em" position="relative" isInvalid={isInvalid}>
				{/* @ts-ignore */}
				<FormLabel htmlFor="input" style={customLabelStyle}>
					{label}
				</FormLabel>
				<Input
					id="input"
					size={"lg"}
					background={"#fff"}
					{...rest}
					fontSize={"15px"}
					outline={"none"}
					pos={"static"}
					zIndex={-2}
				/>
				<FormErrorMessage>
					<FormErrorIcon /> {errorMessage}
				</FormErrorMessage>
			</FormControl>
		</>
	);
};

const SelectInputField: FC<SelectInputProps> = ({
	label,
	children,
	errorMessage,
	isInvalid,
	...rest
}) => {
	return (
		<FormControl isInvalid={isInvalid} my="1em">
			<FormLabel>{label}</FormLabel>
			<Select size={"lg"} {...rest}>
				{children}
			</Select>
			<FormErrorMessage>
				<FormErrorIcon /> {errorMessage}
			</FormErrorMessage>
		</FormControl>
	);
};

export { InputField, LabeledInput, SelectInputField };
