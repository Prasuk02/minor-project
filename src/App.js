
import './App.css';
import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './Pages/Home';
import Hotel from './Pages/Hotel';
import List from './Pages/List';

import Register from './Components/Register';
import Login from './Components/Login';
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
       
        <Route path="/" element={<Home />}/>
          <Route path="/hotels" element={<List  />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Register  />} />
          <Route path="/hotels/:id" element={<Hotel />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
