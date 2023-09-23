import * as yup from "yup";
const schema = yup
  .object({
    fullName: yup
      .string()
      .matches(/^[a-zA-Z ]*$/)
      .trim()
      .required(),
    email: yup.string().email().trim().required(),
    message: yup.string(),
  })
  .required();

export default schema;
