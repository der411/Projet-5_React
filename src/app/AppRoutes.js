import React from 'react';
import {Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import CardDetails from './pages/CardDetails';
import About from './pages/About';
import Footer from './components/Footer';
import Header from './components/Header';
import Error404 from './pages/Error404';

const AppRoutes = () => {
    return (
        
        <>
        <Header/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/location/:id" element={<CardDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/error404" element={<Error404 />} />
        </Routes>
        <Footer/>
        </>
    );
}

export default AppRoutes;
