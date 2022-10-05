import { Box, Button, Paper, Grid } from "@mui/material";
import { TextField, Link, FormControlLabel, Checkbox } from "@mui/material";
import { useDispatch } from "react-redux";
import { useState } from "react";
import {
  googleSignInStart,
  emailSignInStart,
} from "../../store/user/user.action";
import Avatar from '@mui/material/Avatar';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const defaultFormFields = {
  email: "",
  password: "",
};

const paperStyle = {
  padding: 20,
  height: "67vh",
  width: 280,
  margin: "20px auto",
};
const btnstyle = { margin: "8px 0" };

const Login = () => {
  const dispatch = useDispatch();
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    dispatch(googleSignInStart());
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      dispatch(emailSignInStart(email, password));
      resetFormFields();
    } catch (error) {
      console.log("user sign in failed", error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };


  return (
    
    <Grid container spacing={2}>
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
          <h2>Login</h2>
        </Box>
        <form onSubmit={handleSubmit}>
          <TextField
            id="Email"
            label="Email"
            variant="outlined"
            type="email"
            name="email"
            fullWidth
            required
            onChange={handleChange}
            value={email}
            margin="normal"
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
          />
        
        <FormControlLabel
          control={<Checkbox name="checkedB" color="primary" />}
          label="Remember me"
        />
        <Button
          type="submit"
          color="primary"
          variant="contained"
          style={btnstyle}
          fullWidth
        >
          Login
        </Button>
        <Button
          type="submit"
          color="primary"
          variant="contained"
          style={btnstyle}
          fullWidth
          onClick={signInWithGoogle}
        >
          Login with Google
        </Button>
        <Grid item>
                <Link href="/SignUp" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
        </form>
      </Paper>
    </Grid>
    
  );
};

export default Login;
