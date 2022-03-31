import React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import '../styles/logo.css'
import user from '../defaultuser.png'
import {Link as LinkRouter} from "react-router-dom";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import logo from '../logoModificado.png';
import '../styles/stylesNavBar.css'
import Container from './SignUp/container';
import {connect} from 'react-redux';
import userActions from '../redux/actions/userActions';

function SideNavbar(props) {

  const pages = ['Home', 'Cities'];
  const settings = ['Sign In', 'Sign Up']; 

  return(
    <nav className="navbar navbar-light bg-light fixed-top principalNav">
    <div className="container-fluid">
      <LinkRouter to={"/home"} className='navbar-brand notUnderlined mytinerary'> <img src={logo} alt='logoNav' width={50}/> MyTinerary</LinkRouter>
    <button className="navbar-toggler hamburguerButton" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
      <p className='menuP'>Menu</p>
      <span className="navbar-toggler-icon hamburguerIcon"></span>
    </button>
    <div className="offcanvas offcanvas-end navBackground" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div className="offcanvas-header">
      <img src={logo} alt='logoNav' width={50}/>
        <h5 className="offcanvas-title lettercolorsNav" id="offcanvasNavbarLabel">MyTinerary</h5>
        <button type="button" className="btn-close text-reset closeIcon" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li className="nav-item">
            <LinkRouter to={"/home"} className='lettercolorsNav notUnderlined'>Home</LinkRouter>
          </li>
          <li className="nav-item">
          <LinkRouter to={"/cities"} className='lettercolorsNav notUnderlined'>Cities</LinkRouter>
          </li>
          <li className="nav-item dropdown lettercolorsNav">
            <a className="nav-link dropdown-toggle lettercolorsNav" href="#" id="offcanvasNavbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            User
            </a>
            <ul className="dropdown-menu" aria-labelledby="offcanvasNavbarDropdown">
              <li>{!props.user ? (<LinkRouter to={"/signup"} className="dropdown-item">Sign Up</LinkRouter>) : null}</li>
              <li>{!props.user ? (<LinkRouter to={"/login"} className="dropdown-item">Log In</LinkRouter>) : null}</li>
              <li>
                <hr className="dropdown-divider"></hr>
              </li>
              <Container/>
            </ul>
          </li>
        </ul>
    
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
export default connect(mapStateToProps, mapDispatchToProps)(SideNavbar);
