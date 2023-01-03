import { useFormik, FormikHelpers } from "formik";
import * as Yup from "yup";

const ForgetPasswordSchema = Yup.object().shape({
    email: Yup.string().required("Email is required!"),
  });
  
  interface ForgotPasswordFields {
    email: string;
  }

  interface UseForgotPasswordFormOptions {
    onSubmit: (
      values: ForgotPasswordFields,
      formikHelpers: FormikHelpers<ForgotPasswordFields>
    ) => void;
  }

 export const useForgotPasswordFormik = ({ onSubmit }: UseForgotPasswordFormOptions) => {
    return useFormik({
        initialValues: {
          email: "",
        },
        validateOnBlur: false,
        validateOnChange: true,
        validationSchema: ForgetPasswordSchema,
        onSubmit,
      });
}