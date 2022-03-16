import './App.css';
import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ResponsiveAppBar from "./components/SideNavbar";
import Cities from './pages/cities';
import Home from './pages/Home';
import Footer from './components/Footer';
import CardDetails from './pages/UnderConstruction'
import SignUp from './components/SignUp/signUp';
import SignIn from './components/SignUp/signIn';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <ResponsiveAppBar /> 
        <Routes>
        <Route path='*' element={<Home/>}/> 
        <Route path='/home' element={<Home/>}/>
        <Route path='/cities' element={<Cities/>}/>
        <Route path='/UnderConstruction/:id' element={<CardDetails/>}/>
        <Route path='/signup'element={<SignUp/>}/>
        <Route path='/login'element={<SignIn/>}/>
      {/*   <Route path='/details/:id' element={<CardDetails/>}/>
        <Route path='/auth/signup'element={<SignUp/>}/>
        <Route path='/auth/login'element={<SignIn/>}/> */}
        </Routes>
      <Footer /> 
    </BrowserRouter>
    </div>
  );
}

export default App;