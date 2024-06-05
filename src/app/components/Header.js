import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../assets/logo.svg';

const Header = () => {
    return (
        <header>
            <Link to="/"> <img src={logo} alt="Kasa Logo"/></Link>
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
