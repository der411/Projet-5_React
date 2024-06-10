import React, { useState } from 'react';

const Collapse = ({ title, children, className }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`collapse ${className}`}>
            
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
