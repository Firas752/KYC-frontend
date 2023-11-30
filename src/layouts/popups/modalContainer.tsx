import Logo from "@/components/atom/logo";
import {
	Box,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalHeader,
	ModalOverlay,
	ModalProps,
} from "@chakra-ui/react";
import React, { FC, ReactNode } from "react";

interface ModalContainer extends ModalProps {
	children: ReactNode;
	title?: string;
}

const ModalContainer: FC<ModalContainer> = ({ children, ...rest }) => {
	return (
		<Modal {...rest}>
			<ModalOverlay />
			<ModalContent>
				<ModalHeader>
					<Logo />
				</ModalHeader>

				<ModalCloseButton />
				<ModalBody>
					<Box>{children}</Box>
				</ModalBody>
			</ModalContent>
		</Modal>
	);
};

export default ModalContainer;
