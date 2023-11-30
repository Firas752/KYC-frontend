import { Box } from "@chakra-ui/react";
import Image from "next/image";
const Logo = () => {
	return (
		<Box>
			<Image
				width={50}
				height={100}
				src="/images/logomark.svg"
				alt="logo image"
			/>
		</Box>
	);
};

export default Logo;
