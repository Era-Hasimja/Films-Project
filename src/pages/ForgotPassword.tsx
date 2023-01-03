import { Box, Button, TextField } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useForgotPasswordFormik } from "../components/ForgotPassword/ForgotPasswordForm/useForgotPasswordFormik";


export const ForgotPassword = () => {
    const formik = useForgotPasswordFormik({
        onSubmit(values, formikHelpers){
            console.log(values)
        },
    })
    
    return (
        <Box
      sx={{
        width:"100%",
        display: "flex",
        alignItems: "center",
        justifyContent:"center",
      }}>
        
        <Box
          sx={{
            border: 1,
            borderColor: "secondary.main",
            borderRadius: 1,
            padding: "10px",
            minWidth: 360,
          }}
        >
          <h1>Forgot Password</h1>
          <Box
            component="form"
                sx={{
                display: "flex",
                flexDirection: "column",
                marginTop: 4,
                }}
                noValidate
                autoComplete="off"
                onSubmit={formik.handleSubmit}
            >
            <TextField
                id="email"
                name="email"
                label="email"
                variant="outlined"
                value={formik.values.email}
                onChange={formik.handleChange}
                sx={{marginBottom: 2}}
            
            />
            <Button type="submit" variant="contained">
              Submit
            </Button>   
            </Box>
             <Box sx={{
                marginTop: 2,
                display:"flex",
                justifyContent: "space-between"
              }}>
                {/* <NavLink to="/sign-up">Create an account</NavLink> */}
            </Box>
        </Box>
    </Box>   
    )
    
}