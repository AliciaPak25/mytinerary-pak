import './App.css';
import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';


import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


import Header from './components/header';
import SideNavbar from "./components/SideNavbar";
import Cities from './components/cities';
import Home from './components/Home';
import Footer from './components/Footer';

function App() {
  
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hola probando <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <BrowserRouter>
        <Routes>
          <Route path='*' element={<Home/>}/> 
         <Route path='/cities' element={<Cities/>}/>
        </Routes>
      <SideNavbar />
      <Footer />
    </BrowserRouter>
    </div>
  );
}

export default App;