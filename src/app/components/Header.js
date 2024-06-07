import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.svg';

function Header(){
    const location = useLocation();
    const navigate = useNavigate();
    const isAboutPage = location.pathname === '/about';
    const isLocationDetailsPage = location.pathname.startsWith('/location/');
    const isErrorPage = location.pathname === '/error404'; 
    const isActive = (path) => location.pathname === path ? 'active' : '';
    return (
        <header>
            <div className='header'>
                <Link to="/"><img src={logo} alt="Kasa Logo"/></Link>
                <nav>
                    <ul>
                        <li><Link to="/" className={isActive('/')} onClick={() => navigate('/')}>Accueil</Link></li>
                        <li><Link to="/about" className={isActive('/about')} onClick={() => navigate('/about')}>A Propos</Link></li>
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
