import axios from "axios";
import { getCookie } from "cookies-next";

const url = `https://kyc-b6dd115716ab.herokuapp.com`;

const axiosInstance = axios.create({
	baseURL: `${url}`,
	timeout: 10000,
});

axiosInstance.interceptors.request.use(
	function (config) {
		config.headers.Authorization = ` ${getCookie("__session")}`;
		return config;
	},
	function (error) {
		return Promise.reject(error);
	},
);

export { axiosInstance };
