import React, { useState } from 'react';

const Collapse = ({ title, children, className }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`collapse ${className}`}>
            
                <div className="collapse-header" onClick={toggleCollapse}>
                    <h2>{title}</h2>
                    <span className="collapse-icon">
                        <i className={`fas fa-chevron-${isOpen ? 'down' : 'up'}`}></i>
                    </span>
                </div>
                {isOpen && <div className="collapse-content">{children}</div>}
            
        </div>
    );
};

export default Collapse;
