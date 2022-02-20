import './App.css';
import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Carrousel from "./components/carrousel"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Hero from "./components/Hero"
import CallToAction from './components/CallToAction';
import Header from './components/header';

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
    
      <Hero/>
      <CallToAction/>
      <Carrousel/>
      
    
    </BrowserRouter>
    </div>
  );
}

export default App;