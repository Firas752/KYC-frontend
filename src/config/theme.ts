import { extendTheme } from "@chakra-ui/react";

const colors = {
	brand: {
		primary: "#5046E3",
		success: "#00A980",
		secondary_text: "#475467",
		dark_text: "#555760",
	},
	alert: {
		error: "#F04848",
		info: "#0C52B5",
	},

	shades: {
		primary: "#E7F3FF",
		light_success: "#ECFDF3",
	},
};

const fonts = {};

export const theme = extendTheme({ colors, fonts });
