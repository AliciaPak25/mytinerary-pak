import React from 'react';
import './stylesSign.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import EmailIcon from '@mui/icons-material/Email';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import {Link as LinkRouter} from 'react-router-dom';
import userActions from '../../redux/actions/userActions';
import { connect } from 'react-redux';




const SignIn = (props) => {

    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
      });
    
      const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };
    
      const handleClickShowPassword = () => {
        setValues({
          ...values,
          showPassword: !values.showPassword,
        });
      };
    
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };
    
    const handleSubmit = (event) => {
        event.preventDefault()
        const logedUser = {
            email: event.target[0].value,
            password: event.target[1].value,
            from: "form-SignIn"
        }
        props.SignInUser(logedUser)
    }

    return (
        <div>
            <h1>Welcome Back</h1>
            <p>It's nice to see you again!</p>
            <p>Log in to your account</p>

            <form onSubmit={handleSubmit}>
                <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                    <EmailIcon sx={{ color: 'lightBlue', mr: 1, my: 0.5 }} />
                    <TextField id="input-with-sx" label="Email Address" placeholder='example@mail.com' variant="standard" />
                </Box>
                <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
                    <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                    <Input
                        id="standard-adornment-password"
                        type={values.showPassword ? 'text' : 'password'}
                        value={values.password}
                        onChange={handleChange('password')}
                        endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            >
                            {values.showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                        }
                    />
                </FormControl>

                <button type='submit'>Log In</button>
                <p>or</p>
                <p>Log in with Google</p>
                <div>Not a member yet? <LinkRouter to="/signup">Sign up now!</LinkRouter></div>
            </form>
        </div>
    );
}
export default SignIn;