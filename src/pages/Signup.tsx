import { Box, Button, Checkbox, FormControl, FormControlLabel, InputLabel, MenuItem, TextField, Select } from "@mui/material";
import { useSignupFormik } from "../components/Signup/SignupForm/useSignupFormik";


export const Signup = () => {
    const formik = useSignupFormik({
        onSubmit(values, formikHelpers) {
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
          }}
        >
            <Box
                sx={{
                    border: 1,
                    borderColor: "secondary.main",
                    borderRadius: 1,
                    padding: "10px",
                    minWidth: 360,
                }}
            >
                <h1>Signup</h1>
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
                    id="username"
                    name = "username"
                    label="Username" 
                    variant="outlined"
                    value={formik.values.username}
                    onChange={formik.handleChange}
                    error={!formik.errors.username && formik.touched.username}
                    helperText={formik.errors.username}
                    sx={{marginBottom: 2}}
                />
                <TextField
                    id="email"
                    name="email"
                    label="Email" 
                    type="email"
                    variant="outlined"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={!formik.errors.email && formik.touched.email}
                    helperText={formik.errors.email}
                    sx={{marginBottom: 2}}
                />
                <TextField
                    id="password"
                    name="password"
                    label="Password" 
                    type="password"
                    variant="outlined"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    error={!formik.errors.password && formik.touched.password}
                    helperText={formik.errors.password}
                    sx={{marginBottom: 2}}
                />
                <TextField
                    id="password"
                    name="password"
                    label="Confirm password" 
                    type="password"
                    variant="outlined"
                    value={formik.values.confirmPassword}
                    onChange={formik.handleChange}
                    error={!formik.errors.confirmPassword && formik.touched.confirmPassword}
                    helperText={formik.errors.confirmPassword}
                    sx={{marginBottom: 2}}
                />
                 <TextField
                    id="age"
                    name="age"
                    label="Age" 
                    type="number"
                    variant="outlined"
                    value={formik.values.age}
                    onChange={formik.handleChange}
                    error={!formik.errors.age && formik.touched.age}
                    helperText={formik.errors.age}
                    sx={{marginBottom: 2}}
                />
                <FormControl fullWidth>
                    <InputLabel>Gender</InputLabel>
                    <Select
                    name="gender"
                    id="gender"
                    type="string"
                    label="Gender"
                    variant="outlined"
                    value={formik.values.gender}
                    onChange={formik.handleChange}
                    sx={{marginBottom: 2}}
                    >
        
                    <MenuItem value={1}>F</MenuItem>
                    <MenuItem value={2}>M</MenuItem>
                    </Select>
                </FormControl>
                <FormControl fullWidth>
                    <InputLabel>Preferences</InputLabel>
                    <Select
                    name="preferences"
                    id="preferences"
                    type="string"
                    label="Preferences"
                    variant="outlined"
                    value={formik.values.preferences}
                    onChange={formik.handleChange}
                    sx={{marginBottom: 2}}
                    >
        
                    <MenuItem value={1}>Action</MenuItem>
                    <MenuItem value={2}>Comedy</MenuItem>
                    <MenuItem value={3}>Sci-Fi</MenuItem>
                    <MenuItem value={4}>Drama</MenuItem>
                    <MenuItem value={5}>Thriller</MenuItem>
                    <MenuItem value={6}>Other</MenuItem>
                    </Select>
                </FormControl>
                <FormControlLabel control={<Checkbox/>} 
                    label= "I agree to terms and conditions"
                />
                <Button type="submit" variant="contained">
                  Signup
                </Button>
                </Box>
                <Box sx={{
                    marginTop: 2,
                    display:"flex",
                    justifyContent: "space-between"
                }}>
               </Box>
            </Box>
        </Box>
    )
}





