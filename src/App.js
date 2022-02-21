import './App.css';
import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import SideNavbar from "./components/SideNavbar";
import Cities from './components/cities';
import Home from './components/Home';
import Footer from './components/Footer';

function App() {
  
  return (
    <div className="App">
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