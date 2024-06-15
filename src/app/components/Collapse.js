import React, { useState } from 'react';

function Collapse({ title, children}){

    // Initialisation de l'état local fermé par défaut
    const [isOpen, setIsOpen] = useState(false);

    // Fonction pour inverser l'état local
    function toggleCollapse(){
        setIsOpen(!isOpen);
    };

    return (
        <div className="collapse">
            <div className="collapse-header">
                <h2>{title}</h2>
                <span className="collapse-icon" onClick={toggleCollapse}>
                    <i className={`fas fa-chevron-${isOpen ? 'down' : 'up'}`}></i>
                </span>
            </div>
            <div className={`collapse-content ${isOpen ? 'open' : ''}`}>
                {children}
            </div>
        </div>
    );
};

export default Collapse;
