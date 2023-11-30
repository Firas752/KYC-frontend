import * as Yup from "yup";

const _personal_info_validator = Yup.object().shape({
	firstName: Yup.string().required(),
	email: Yup.string().required(),
});

export { _personal_info_validator };
