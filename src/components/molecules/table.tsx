import {
	Table,
	Thead,
	Tbody,
	Tr,
	Th,
	Td,
	TableContainer,
	TableProps,
} from "@chakra-ui/react";
import { FC, Fragment, ReactNode } from "react";

interface TableInterface extends TableProps {
	children: ReactNode;
	tableHeader: string[];
}

const DefaultTable: FC<TableInterface> = ({
	children,
	tableHeader,
	...rest
}) => {
	return (
		<TableContainer>
			<Table {...rest}>
				<Thead bg="#EAECF0" borderRadius={"10px 0"}>
					<Tr>{tableHeader?.map((_) => <Th key={_}>{_}</Th>)}</Tr>
				</Thead>
				<Tbody>{children}</Tbody>
			</Table>
		</TableContainer>
	);
};

export default DefaultTable;
