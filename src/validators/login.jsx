import * as Yup from "yup";

export const loginInSchema = Yup.object({
    email: Yup.string().email().required("Please enter your email"),
    password: Yup.string().required("No password provided."),
  });