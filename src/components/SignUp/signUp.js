import React, { useState } from 'react';
import './stylesSign.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import photoForm from './imagesSign/placeSign.jpg';
import { connect } from 'react-redux';
import userActions from '../../redux/actions/userActions';
import {Link as LinkRouter, useNavigate} from 'react-router-dom';
import GoogleSignUp from './GoogleSignUp';
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  cardRoot: {
    flexGrow: 1,
    flexWrap: "wrap"
  },
  media: {
    width: "100%",
    height: "100%",
    minWidth: 300,
    minHeight: 170
  },
  mediaItem: {
    flex: 1,
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
    minWidth: 300,
    minHeight: 170
  },
  contentItem: {
    flex: 2
  }
}));

const SignUp = (props) => {
  const classes = useStyles();
    const countries = ["Spain", "Italy", "France", "Slovenia", "Argentina", "South Korea", "United States", "United Arab Emirates"];
    let navigate = useNavigate()

    const [values, setValues] = React.useState({
        password: '',
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
    const [country, setCountry] = React.useState('');

    const handleChange2 = (event) => {
      setCountry(event.target.value);
    };

    const handleSelect = (event) => {
      handleChange2(event);
      handleInputChange(event);
    };
//submit
    const [newUser, setNewUser] = useState({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      photoURL: '', 
      country: '',
      from: "form-SignUp"
    })

    const handleInputChange = (event) => {
      setNewUser({
        ...newUser,
        [event.target.name]: event.target.value
      })
    } 

    const handleSubmit = async (event) => {
      event.preventDefault()
      await props.signUpUser(newUser, navigate)
      
      .then(setNewUser({firstName: '',
      lastName: '',
      email: '',
      password: '',
      photoURL: '', 
      country: '',
      from: "form-SignUp"}))
    }

    return (
        <div className='divContainerSignUp'>

    <Card>
      <Grid container className={classes.cardRoot}>
        <Grid item xs={12} sm className={classes.mediaItem}>
          <img src={photoForm} className={classes.media} alt='beautiful-place' width={300}
            height={170}/>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs direction="column">
            <CardContent className='CardContentForm'>
              <Typography gutterBottom variant="h5" component="h2">
              Create a new account
              </Typography>
              <Typography variant="body2" component="p">
              Want to sign up? Fill out this form!
              </Typography>
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
      <TextField name='firstName' value={newUser.firstName} id="outlined-basic" label="First Name" variant="outlined" onChange={handleInputChange} />
      <TextField id="outlined-name" label="Last Name" name='lastName' value={newUser.lastName} onChange={handleInputChange}/>
      <TextField id="outlined-textarea"  label="Email Address" value={newUser.email} placeholder="example@email.com" multiline name='email' onChange={handleInputChange} />
      <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
          <InputLabel htmlFor="password">Password</InputLabel>
          <OutlinedInput
            value={newUser.password}
            id="password"
            type={values.showPassword ? 'text' : 'password'}
            onChange={handleInputChange}
            name="password"
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

      <TextField id="filled-textarea" label="Photo URL" value={newUser.photoURL} placeholder="URL Profile Picture" multiline name='photoURL' onChange={handleInputChange}/>
      
        <FormControl sx={{ m: 1, minWidth: 100 }}>
        <InputLabel id="demo-simple-select-autowidth-label">Country</InputLabel>
        <Select
          value={newUser.country}
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          onChange={handleSelect}
          autoWidth
          label="Country"
          name='country'
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
            <button type='submit' className='button'>
              <span className='spanSign'>Sign Up</span>
              <div className="liquid"></div>
            </button>
            <p>or</p>
            <GoogleSignUp/>
            <div>Already have an account? <LinkRouter to="/login">Log in here</LinkRouter></div>
            </form>
            </CardContent>
          </Grid>
        </Grid>
      </Grid>
    </Card>
    </div>
    
    );
          }

const mapDispatchToProps = {
  signUpUser: userActions.signUpUser,
}

const mapStateToProps = (state) => {
  return {
    user: state.userReducer.user,
    message: state.userReducer.message,
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);

/* countriesApi: state.countriesDataReducer.countriesApi,
    filterCountriesApi: state.countriesDataReducer.filterCountriesApi, */


/* 

function EpisodeCard() {
  
  );
}

export default EpisodeCard; */
