import React, {useState} from 'react';
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
import {Link as LinkRouter, useNavigate} from 'react-router-dom';
import userActions from '../../redux/actions/userActions';
import { connect } from 'react-redux';
import GoogleSignIn from './GoogleSignIn';


const SignIn = (props) => {
    
    let navigate = useNavigate()

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
    const [logedUser, setLogedUser] = useState({
        email: '',
        password: '',
        from: "form-SignIn"
    })

    const handleInputChange = (event) => {
        setLogedUser({
        ...logedUser,
        [event.target.name]: event.target.value
        })
    } 
    const handleSubmit = async (event) => {
        event.preventDefault()
        await props.signInUser(logedUser, navigate)
    }

    return (
        <div className='divContainerSignIn'>
          <div className='textSignIn'>
            <h1>Welcome Back</h1>
            <p>It's nice to see you again!</p>
            <p>Log in to your account</p>
            </div>

            <form className='formContainer registerContainer' onSubmit={handleSubmit}>
                        <Box
                  component="form"
                  sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                  }}
                  noValidate
                  autoComplete="on"
                  className='inputsSU'
                > 
                <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                    <EmailIcon sx={{ color: 'lightBlue', mr: 1, my: 0.5 }} />
                    <TextField id="input-with-sx" label="Email Address" placeholder='example@mail.com' variant="standard"name='email' onChange={handleInputChange} />
                </Box>
                <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
                    <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                    <Input
                        id="standard-adornment-password"
                        type={values.showPassword ? 'text' : 'password'}
                        name='password'
                        onChange={handleInputChange}
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
                        </Box>
                  
                <button type='submit'>Log In</button>
                <p>or</p>
                <GoogleSignIn/>
                <div>Not a member yet? <LinkRouter to="/signup">Sign up now!</LinkRouter></div>
            </form>
        </div>
    );
}

const mapDispatchToProps = {
    signInUser: userActions.signInUser,
  }
  
  const mapStateToProps = (state) => {
    return {
      user: state.userReducer.user,
      message: state.userReducer.message,
    }
  }
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
