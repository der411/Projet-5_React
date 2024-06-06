import React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import logo from '../assets/logo.svg';

const Header = () => {
    const location = useLocation();
    const isAboutPage = location.pathname === '/about';
    const isLocationDetailsPage = location.pathname.startsWith('/location/');
    const isErrorPage = location.pathname === '/error404'; 

    return (
        <header>
            <div className='header'>
                <Link to="/"><img src={logo} alt="Kasa Logo"/></Link>
                <nav>
                    <ul>
                        <li><NavLink exact to="/" activeClassName="active">Accueil</NavLink></li>
                        <li><NavLink to="/about" activeClassName="active">A Propos</NavLink></li>
                    </ul>
                </nav>
            </div>
            {/* Affiche le .hero seulement si ce n'est ni une page de détail ni la page about ni la page 404 */}
            {!isLocationDetailsPage && !isErrorPage && (
                <div className={`hero ${isAboutPage ? "about-hero" : ""}`}>
                    <h1>{isAboutPage ? "" : "Chez vous, partout et ailleurs"}</h1>
                </div>
            )}
        </header>
    );
}

export default Header;
