import {
	Box,
	Flex,
	Input,
	InputGroup,
	InputLeftElement,
	Text,
	Button,
} from "@chakra-ui/react";
import React, { ChangeEvent, FC, ReactNode } from "react";
import { BiFilter } from "react-icons/bi";

interface IActionProps {
	children: ReactNode;
	title?: string;
	onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

const searchIcon = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="20"
		height="20"
		viewBox="0 0 20 20"
		fill="none"
	>
		<path
			d="M17.5 17.5L14.5834 14.5833M16.6667 9.58333C16.6667 13.4954 13.4954 16.6667 9.58333 16.6667C5.67132 16.6667 2.5 13.4954 2.5 9.58333C2.5 5.67132 5.67132 2.5 9.58333 2.5C13.4954 2.5 16.6667 5.67132 16.6667 9.58333Z"
			stroke="#667085"
			stroke-width="1.66667"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</svg>
);

const ActionContainer: FC<IActionProps> = ({ children, onChange, title }) => {
	return (
		<Box border={"1px solid #D0D5DD"} py="20px" borderRadius={"lg"}>
			<Flex
				px={"24px"}
				flexDir={["column", "row", "row"]}
				justifyContent={"space-between"}
				alignItems={["left", "center"]}
				gap="1em"
			>
				<Box>
					<Text
						fontWeight={600}
						lineHeight={"28px"}
						fontSize={["18px", "20px"]}
					>
						{title}
					</Text>
				</Box>

				{onChange && (
					<Box display={"flex"} gap="1em" flexDir={["column", "column", "row"]}>
						<InputGroup>
							<InputLeftElement>{searchIcon}</InputLeftElement>
							<Input
								type="search"
								outline={"none"}
								placeholder="Search Items"
								onChange={onChange}
							/>
						</InputGroup>
						{/* FILTER CONTAINER */}
						{/* <Button px="2em" bg="none" border={"1px solid var(--primary-gray)"}>
							<Box display={["none", " none", "block"]}>
								<BiFilter size="2em" />
							</Box>
							<Box display={["block", "block", "none"]}>
								<BiFilter size="1.8em" />
							</Box>
							<Text>Filter</Text>
						</Button> */}
					</Box>
				)}
			</Flex>
			<Box my="2em">{children}</Box>
		</Box>
	);
};

export default ActionContainer;
