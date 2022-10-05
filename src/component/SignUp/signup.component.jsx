import { Box, Button, Paper, Grid } from "@mui/material";
import { TextField, Link } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import Avatar from '@mui/material/Avatar';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { signUpStart } from "../../store/user/user.action";


const paperStyle = {
  padding: 20,
  height: "76vh",
  width: 280,
  margin: "20px auto",
};

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUp = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;
  const dispatch = useDispatch();

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("passwords do not match");
      return;
    }

    try {
      dispatch(signUpStart(email, password, displayName));
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot create user, email already in use");
      } else {
        console.log("user creation encountered an error", error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <Grid  container spacing={2}>
      <Paper elevation={10} style={paperStyle}>
      <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}>
      <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          </Box>
        <Box align="center">
          <h2>Sign Up :D</h2>
        </Box>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Display Name"
            type="text"
            onChange={handleChange}
            name="displayName"
            value={displayName}
            variant="outlined"
            fullWidth
            margin="none"
            required
            helperText="Please enter your name" 
          />
          <TextField
            id="Email"
            label="Email"
            variant="outlined"
            name="email"
            fullWidth
            required
            value={email}
            onChange={handleChange}
            margin="dense"
            helperText="Please enter your email" 
          />

          <TextField
            id="Password"
            label="Password"
            variant="outlined"
            type="password"
            name="password"
            fullWidth
            required
            value={password}
            onChange={handleChange}
            margin="dense"
            helperText="Please enter your Password" 
          />
          <TextField
            id="ConfirmPassword"
            label="ConfirmPassword"
            variant="outlined"
            type="password"
            name="confirmPassword"
            fullWidth
            required
            margin="dense"
            value={confirmPassword}
            onChange={handleChange}
          />
        
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 1, mb: 1 }}
        >
          Sign Up
        </Button>
        <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/Login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
        </form>
      </Paper>
    </Grid>
  );
};

export default SignUp;
