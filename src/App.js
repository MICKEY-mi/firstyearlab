import React from 'react';

import './App.css';
import Navbarfirst from './components/navbar/navbar-first';

import FirstyearLab from './components/firstyearlab/firstyearlab';

import { BrowserRouter , Routes, Route } from 'react-router-dom';
function App() {
  return (

    <BrowserRouter>
      <Routes>
          <Route path="*" element={[(<Navbarfirst/>),(<FirstyearLab />)]} />
           </Routes>
    </BrowserRouter>

  );
}

export default App;
