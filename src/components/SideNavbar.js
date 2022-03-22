import React from 'react';
import {useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
/* import Container from '@mui/material/Container'; */
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import '../styles/logo.css'
import user from '../defaultuser.png'
import {Link as LinkRouter} from "react-router-dom";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import logo from '../image.svg';
import '../styles/stylesNavBar.css'
import Container from './SignUp/container';
import {connect} from 'react-redux';
import userActions from '../redux/actions/userActions';

const pages = ['Home', 'Cities'];
const settings = ['Sign In', 'Sign Up'];

  const ResponsiveAppBar = (props) => {
    return(
      <nav className="navbar navbar-light bg-light fixed-top principalNav">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">MyTinerary</a>
    <button className="navbar-toggler hamburguerButton" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
      <p className='menuP'>Menu</p>
      <span className="navbar-toggler-icon hamburguerIcon"></span>
    </button>
    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">MyTinerary</h5>
        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li className="nav-item">
            <LinkRouter to={"/home"} className='notUnderlined'>Home</LinkRouter>
          </li>
          <li className="nav-item">
          <LinkRouter to={"/cities"} className='notUnderlined'>Cities</LinkRouter>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="offcanvasNavbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            User
            </a>
            <ul className="dropdown-menu" aria-labelledby="offcanvasNavbarDropdown">
              <li>{!props.user ? (<LinkRouter to={"/signup"} className="dropdown-item">Sign Up</LinkRouter>) : null}</li>
              <li>{!props.user ? (<LinkRouter to={"/login"} className="dropdown-item">Log In</LinkRouter>) : null}</li>
              <li>
                <hr className="dropdown-divider"></hr>
              </li>
              <li><a className="dropdown-item" href="#">Something else here</a></li>
              <Container/>
            </ul>
          </li>
        </ul>
        {}
        <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </div>
</nav>
    );
}
const mapStateToProps = (state) => {
  return {
      user: state.userReducer.user,
  }
}
const mapDispatchToProps = {
  signOutUser: userActions.signOutUser,
  sigInUser: userActions.signInUser,
}
export default connect(mapStateToProps, mapDispatchToProps)(ResponsiveAppBar);
