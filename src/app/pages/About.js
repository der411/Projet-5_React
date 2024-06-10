import React from 'react';
import Collapse from "../components/Collapse";
import data from '../data/about.json';
import { useLocation } from 'react-router-dom';


function About() {
    const location = useLocation();
    const isAboutPage = location.pathname === '/about';
    
    return (
        <>
            {isAboutPage && (
                <div className="hero about-hero">
                </div>
            )}
            <div className="collapse-container column-style">
                {data.map(item => (
                    <Collapse key={item.id} title={item.title}>
                        {item.content}
                    </Collapse>
                ))}
            </div>
        </>
    );
}

export default About;
