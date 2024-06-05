import React from 'react';
import {Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import CardDetails from './pages/CardDetails';
import About from './pages/About';
import Header from './components/Header';
import Footer from './components/Footer';

const AppRoutes = () => {
    return (
        
       <>
       <Header/>
        <Routes>
          
          <Route exact path="/" element={<Home />} />
          <Route path="/location/:id" element={<CardDetails />} />
          <Route path="/about" element={<About />} />
        </Routes>
      <Footer/>
        </>
    );
}

export default AppRoutes;
