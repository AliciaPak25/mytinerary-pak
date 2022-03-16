import React, { useEffect } from 'react';
import './stylesSign.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import photoForm from './imagesSign/placeSign.jpg';

import { connect } from 'react-redux';
import userActions from '../../redux/actions/userActions';
import {Link as LinkRouter} from 'react-router-dom';
import { Menu } from '@mui/material';

const SignUp = (props) => {
  console.log(props)
const countries = ["Spain", "Italy", "France", "Slovenia", "Argentina", "South Korea", "United States", "United Arab Emirates"];
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
//select
    const [age, setAge] = React.useState('');

    const handleChange2 = (event) => {
      setAge(event.target.value);
    };
//submit
    const handleSubmit = (event) => {
      event.preventDefault()
      console.log(event.target);
      const newUser ={
        firstName: event.target[0].value, 
        lastName: event.target[1].value,
        email: event.target[2].value,
        password: event.target[3].value,
        photoURL: "https://cinefiloserial.com.ar/wp-content/uploads/2018/05/DW7r_ahV4AQ_DlO.jpg", 
        country: event.target[5].value,
        from: "form-SignUp"
      }
      props.signUpUser(newUser)
      
    }
    console.log(props.message)
    alert(props.message.message)
    return (
        <div className='divContainerSignUp'>
            <div className='imgSignUp'>
                    <img src={photoForm} className='photoSU' alt='beautiful-place'/>
            </div>
            <div className='registerContainer'>
                <h1>Create a new account</h1>
                <p>Want to sign up? Fill out this form!</p>
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
      <TextField id="outlined-basic" label="First Name" variant="outlined" />
      <TextField id="outlined-name" label="Last Name" />
      <TextField id="outlined-textarea" label="Email Address" placeholder="example@email.com" multiline />
      <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>

      <TextField id="filled-textarea" label="Photo URL" placeholder="URL Profile Picture" multiline />
      
        <FormControl sx={{ m: 1, minWidth: 100 }}>
        <InputLabel id="demo-simple-select-autowidth-label">Country</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={age}
          onChange={handleChange2}
          autoWidth
          label="Country"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {countries.map(country=>
            <MenuItem value={country}>{country}</MenuItem>
            )}
        </Select>
      </FormControl>
      </Box>
            <button type='submit'>
              <span>Sign Up</span>
              <div class="liquid"></div>
            </button>
            <p>or</p>
            <p>Sign up with Google</p>
            <div>Already have an account? <LinkRouter to="/login">Log in here</LinkRouter></div>
            
            </form>
            </div>
            </div>
        
    );
}

const mapDispatchToProps = {
  signUpUser: userActions.signUpUser,
}

const mapStateToProps = (state) => {
  return {
    message: state.userReducer.message,
    /* countriesApi: state.countriesDataReducer.countriesApi,
    filterCountriesApi: state.countriesDataReducer.filterCountriesApi, */
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);