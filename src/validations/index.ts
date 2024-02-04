import * as Yup from "yup";
import { string, number, boolean } from "yup";

const create_requirement_schema = Yup.object().shape({
	average_salary: number()
		.required("Avarage salary is required")
		.moreThan(30, "Please use a valid amount"),
	account_balance: number().required(" Account balance is required"),
	name: string().required().min(2, "Name is too  short"),
});

const create_package_schema = Yup.object().shape({
	name: string().required(),
	description: string().required(),
	logo_link: string().url(),
	risk_parameter_id: string().required("Risk paramter is required"),
});

const kyc_personal_info_schema = Yup.object().shape({
	first_name: string().required("First name is required"),
	last_name: string().required("Last name is required"),
	// address: string().required("Address is required"),
	email: string().email("Invalid email address").required("Email is required"),
	// email: string().required("Email is required"),
	phone_number: string().required("Phone number is required"),
	bvn: Yup.number()
		.integer("BVN must be an integer")
		.min(10000000000, "BVN must be 11 digits")
		.max(99999999999, "BVN must be 11 digits"),
});

const bpjs = Yup.object().shape({
	email: string().required("Email is required"),
	phone_number: string().required("Password is required"),
});

export {
	create_requirement_schema,
	create_package_schema,
	kyc_personal_info_schema,
	bpjs,
};
