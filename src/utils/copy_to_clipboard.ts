import cogoToast from "cogo-toast";

interface ToastProps {
	data: string;
	message: string;
}
const copyToClipboard = ({ data, message }: ToastProps) => {
	navigator?.clipboard
		?.writeText(data)
		.then((resolve) => {
			cogoToast.success(`${message ? message : "Copied Successfully"}`);
		})
		.catch((err) => cogoToast.error("Failed to copy "));
};

export { copyToClipboard };
