import * as yup from "yup";

export const adminSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  image: yup.string().required("Image is required"),
  email: yup.string().email().required("Email is required"),
  password: yup.string().min(6).max(32).required(),
});
