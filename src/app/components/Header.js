import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';
import '../../css/style.css';

const Header = () => {
  return (
    <header>
      <img src={logo} alt="Kasa Logo" />
      <nav>
        <ul>
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="/about">A Propos</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
