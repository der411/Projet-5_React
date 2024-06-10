import React from 'react';
import Card from '../components/Card';
import { useLocation } from 'react-router-dom';
import data from '../data/data.json';


function Home() {

    const location = useLocation();
    const isHomePage = location.pathname === '/';
    
    return (
        <>
            {isHomePage && (
                <div className="hero">
                    <h1>Chez vous, partout et ailleurs</h1>
                </div>
            )}
            <div className="home">
                <div className="accomodations-container">
                    {data.map(accomodation => (
                        <Card key={accomodation.id} accomodation={accomodation}/>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Home;

