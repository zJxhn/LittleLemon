import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About'
import Menu from './Pages/Menu';
import Reservations from './Pages/Reservations';
import Order from './Pages/Order';
import Login from './Pages/Login';


function App() {
  return (
    <BrowserRouter basename="/LittleLemon">
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/menu' element={<Menu/>}></Route>
          <Route path='/reservations' element={<Reservations/>}></Route>
          <Route path='/order' element={<Order/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
