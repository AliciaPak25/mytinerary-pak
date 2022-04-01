import './App.css';
import React, {useEffect} from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import SideNavbar from './components/SideNavbar';
import Cities from './pages/cities';
import Home from './pages/Home';
import Footer from './components/Footer';
import CardDetails from './pages/UnderConstruction'
import SignUp from './components/SignUp/signUp';
import SignIn from './components/SignUp/signIn';
import Snack from './components/SignUp/Snackbar';
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
      <SideNavbar /> 
      
      <Snack/>
        <Routes>
        <Route path='*' element={<Home/>}/> 
        <Route path='/home' element={<Home/>}/>
        <Route path='/cities' element={<Cities/>}/>
        <Route path='/detail/:id' element={<CardDetails/>}/>
        {!props.user &&<Route path="/login" element={<SignIn />} />}
				{!props.user &&<Route path="/signup" element={<SignUp />} />}
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