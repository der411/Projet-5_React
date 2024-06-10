import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.svg';

function Header(){
    const location = useLocation();
    const navigate = useNavigate();
    
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
        </header>
    );
}

export default Header;
