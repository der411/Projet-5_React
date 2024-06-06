import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.svg';

const Header = () => {
    const location = useLocation();
    const isAboutPage = location.pathname === '/about';
    const isLocationDetailsPage = location.pathname.startsWith('/location/');

    return (
        <header>
            <div className='header'>
                <Link to="/"><img src={logo} alt="Kasa Logo"/></Link>
                <nav>
                    <ul>
                        <li><Link to="/">Accueil</Link></li>
                        <li><Link to="/about">A Propos</Link></li>
                    </ul>
                </nav>
            </div>
            {/* Affiche le .hero seulement si ce n'est ni une page de détail ni la page about */}
            {!isLocationDetailsPage && (
                <div className={`hero ${isAboutPage ? "about-hero" : ""}`}>
                    <h1>{isAboutPage ? "" : "Chez vous, partout et ailleurs"}</h1>
                </div>
            )}
        </header>
    );
}

export default Header;
