import {
	Tabs,
	Tab,
	TabList,
	TabPanel,
	TabPanels,
	TabsProps,
} from "@chakra-ui/react";
import { FC, Fragment, ReactNode } from "react";

interface ICusatomerTab extends TabsProps {
	children: ReactNode | [];
	tabItems: string[];
}

const CustomTab: FC<ICusatomerTab> = ({ children, tabItems, ...rest }) => {
	return (
		<Tabs isLazy colorScheme="purple">
			<TabList>
				{tabItems.map((_) => (
					<Tab key={_} fontWeight={"semibold"}>
						{_}
					</Tab>
				))}
			</TabList>

			<TabPanels my={["2em", "2.5em"]}>
				{/* @ts-ignore */}
				{children?.map((_) => (
					<Fragment key={_}>
						<TabPanel>{_}</TabPanel>
					</Fragment>
				))}
			</TabPanels>
		</Tabs>
	);
};

export default CustomTab;
