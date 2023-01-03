import { useFormik, FormikHelpers } from "formik";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
    username: Yup.string().required("Username is required!"),
    email: Yup.string().required("Email is required!"),
    password: Yup.string().required("Password is required!")
    .min(8, "Pasword must be 8 or more characters")
    .matches(/(?=.*[a-z])(?=.*[A-Z])\w+/, "Password ahould contain at least one uppercase and lowercase character")
    .matches(/\d/, "Password should contain at least one number")
    .matches(/[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/, "Password should contain at least one special character"),
    confirmPassword: Yup.string().required("Confirm Password is required!").oneOf([Yup.ref("password"), null], "Passwords must match"),
    age: Yup.number().required("Age is required!").min(16, "You must be 16+ years old"),
    gender: Yup.string().required("Gender is required!"),
    preferences: Yup.string().optional()
    

  });

  interface SignupFields {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
    age: number;
    gender: string,
    preferences:string;


  }
  
  interface UseSignupFormOptions {
    onSubmit: (
      values: SignupFields,
      formikHelpers: FormikHelpers<SignupFields>
    ) => void;
  }
export const useSignupFormik = ({ onSubmit } : UseSignupFormOptions) => {
    return useFormik({
        initialValues: {
          username: "",
          email: "",
          password: "",
          confirmPassword: "",
          age: 0,
          gender: "",
          preferences: "",
        },
        validateOnBlur: false,
        validateOnChange: true,
        validationSchema: SignupSchema,
        onSubmit,
      });
}