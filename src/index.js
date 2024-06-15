import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './app/AppRoutes';
import "./css/style.css";

// Création de la racine DOM de l'application
const root = ReactDOM.createRoot(document.getElementById('root'));

// Rendu de l'application dans la racine DOM
// L'app est enveloppée dans le composant Router pour permettre la        navigation
root.render(
  <>
    <Router>
      <AppRoutes />
    </Router>
  </>
);
