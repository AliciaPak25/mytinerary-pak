import './App.css';
import React, {useEffect} from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ResponsiveAppBar from "./components/SideNavbar";
import Cities from './pages/cities';
import Home from './pages/Home';
import Footer from './components/Footer';
import CardDetails from './pages/UnderConstruction'
import SignUp from './components/SignUp/signUp';
import SignIn from './components/SignUp/signIn';
import Snack from './components/SignUp/Snackbar';
/* import Container from './components/SignUp/container'; */
import { connect } from 'react-redux';
import userActions from './redux/actions/userActions';

function App(props) {

  useEffect(() => {
 
    if(localStorage.getItem('token')!== null){
      const token = localStorage.getItem("token")
      props.verifyToken(token)
    }
  },[])

  return (
    <div className="App">
      <BrowserRouter>
      <ResponsiveAppBar /> 
      {/* <Container/> */}
      <Snack/>
        <Routes>
        <Route path='*' element={<Home/>}/> 
        <Route path='/home' element={<Home/>}/>
        <Route path='/cities' element={<Cities/>}/>
        <Route path='/UnderConstruction/:id' element={<CardDetails/>}/>
      {/*  <Route path='/signup' element={<SignUp/>}/>
        <Route path='/login' element={<SignIn/>}/> */}
        {!props.user &&<Route path="/login" element={<SignIn />} />}
				{!props.user &&<Route path="/signup" element={<SignUp />} />}
        {/* {!props.user ? (<Route path="/signup" element={<SignUp />} />) : null / ""} */}
        {/* {if (props.user){
          <Route path="/signup" element={<SignUp />} />
        }} */}
        </Routes>
      <Footer /> 
    </BrowserRouter>
    </div>
  );
}

const mapDispatchToProps = {
	verifyToken: userActions.verifyToken,
}
const mapStateToProps = (state) => {
  return{
    user: state.userReducer.user,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App); 


 {/*   <Route path='/details/:id' element={<CardDetails/>}/>
        <Route path='/auth/signup'element={<SignUp/>}/>
        <Route path='/auth/login'element={<SignIn/>}/> */}

/*         import React, {useEffect} from 'react'
import './App.css';
import Container from './components/SignUp/container';
import Snackbar from './components/Snackbar';
import { connect } from 'react-redux';
import userActions from './redux/actions/userActions';

function App(props) {
  useEffect(() => {
 
    if(localStorage.getItem('token')!== null){
      const token = localStorage.getItem("token")
      props.VerificarToken(token)
    }
  },[])
  return (
    <div className="App">
      <Snackbar/>
      <Container />
    </div>
  );
}

const mapDispatchToProps = {
	VerificarToken: userActions.VerificarToken,

}



export default connect(null, mapDispatchToProps)(App); */