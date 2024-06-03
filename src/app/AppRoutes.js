import React from 'react';
import {Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import CardDetails from './pages/CardDetails';

const AppRoutes = () => {
    return (
        
       
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/location/:id" element={<CardDetails />} />
        </Routes>
      

    );
}

export default AppRoutes;
