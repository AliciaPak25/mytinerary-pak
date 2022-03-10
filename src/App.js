import './App.css';
import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ResponsiveAppBar from "./components/SideNavbar";
import Cities from './components/cities';
import Home from './components/Home';
import Footer from './components/Footer';
import CardDetails from './components/UnderConstruction'



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
        </Routes>
      <Footer /> 
    </BrowserRouter>
    </div>
  );
}

export default App;