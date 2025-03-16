import React from "react";
import Header from "./components/header/Header.js";

import { Route, Routes } from "react-router-dom";
import Flight from './pages/Flight/Flight.js';
import Blogs from './pages/Blogs/Blogs.js';
import ContactUs from './pages/Contact Us/ContactUs.js';
import BookNow from './pages/BookNow/BookNow.js';


function App() {
  return (
    <>
    <Header />
    <Routes>
    <Route path='/' element={<Flight/>} />
    {/* <Route path='#' element={<Deals/>} /> */}
    <Route path='/blogs' element={<Blogs/>} />
    <Route path='/contacts' element={<ContactUs/>} />
    <Route path='/book' element={<BookNow/>} />
    </Routes>
    
  

    </>
  );
}

export default App;
