/////////////
// IMPORTS //
/////////////

import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';

////////////////
// COMPONENTS //
////////////////

import Home from './components/Routes/Home';
import About from './components/Routes/About';
import Projects from './components/Routes/Projects';
import Contact from './components/Routes/Contact';

//////////////////
// APP FUNCTION //
//////////////////

const App = () => {
  
  ////////////
  // STATES //
  ////////////

  ////////////////////////
  // BODY HTML ELEMENTS //
  ////////////////////////
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path="" element={ <Home /> } />
            <Route path="About" element={ <About /> } />
            <Route path="Projects" element={ <Projects /> } />
            <Route path="Contact" element={ <Contact /> } />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

////////////////
// EXPORT APP //
////////////////

export default App;
