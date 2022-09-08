/////////////
// IMPORTS //
/////////////

import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

////////////////
// COMPONENTS //
////////////////

import Home from './components/Routes/Home';
import About from './components/Routes/About';
import Projects from './components/Routes/Projects';

//////////////////
// APP FUNCTION //
//////////////////

const App = () => {
  
  ////////////
  // STATES //
  ////////////
  
  let [isHomePage, setIsHomePage] = useState(true);

  ////////////////////////
  // BODY HTML ELEMENTS //
  ////////////////////////
  
  return (
    <>
      <header>
        <h1>Sara Meixner</h1>
      </header>
      <main>
        <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route path="" element={ <Home /> } />
              <Route path="About" element={ <About /> } />
              <Route path="Projects" element={ <Projects /> } />
            </Route>

          </Routes>
        </BrowserRouter>
      </main>
    </>
  );
}

////////////////
// EXPORT APP //
////////////////

export default App;
