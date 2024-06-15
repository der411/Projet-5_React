import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.svg';

function Header(){

    // URL actuelle dans l'application
    const location = useLocation();

    // Vérifie si l'emplacement actuel pour ajouter la classe active
    const isActive = (path) => location.pathname === path ? 'active' : '';

    // Hook de navigation
    const navigate = useNavigate();
    
    

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
        </header>
    );
}

export default Header;
