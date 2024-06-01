import React from 'react';
import logo from '../assets/logo-footer.svg';
import '../../css/style.css';

function Footer() {
  return (
    <footer>
        <img className='logo-footer' src={logo} alt="Kasa Logo" />
      <p>&copy; 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;