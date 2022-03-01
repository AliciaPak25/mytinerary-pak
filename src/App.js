import './App.css';
import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import SideNavbar from "./components/SideNavbar";
import Cities from './components/cities';
import Home from './components/Home';
import Footer from './components/Footer';
import ActionAreaCard from './components/UnderConstruction'



function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='*' element={<Home/>}/> 
        <Route path='/cities' element={<Cities/>}/>
        <Route path='/UnderConstruction/:id' element={<ActionAreaCard/>}/>
        </Routes>
       <SideNavbar /> 
      {/* <Footer /> */}
    </BrowserRouter>
    </div>
  );
}

export default App;