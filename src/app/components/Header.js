import React from 'react';
import { Link, useLocation} from 'react-router-dom';
import logo from '../assets/logo.svg';

function Header(){

    // Pour obtenir l'URL actuelle dans l'application
    const location = useLocation();

    // Vérifie si le chemin actuel est le même que celui en argument pour ajouter la classe active
    const isActive = (path) => location.pathname === path ? 'active' : '';

    return(

        <header>
            <div className='header'>
                <Link to="/"><img src={logo} alt="Kasa Logo"/></Link>
                <nav>
                    <ul>
                        <li><Link to="/" className={isActive('/')}>Accueil</Link></li>
                        <li><Link to="/about" className={isActive('/about')}>A Propos</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
