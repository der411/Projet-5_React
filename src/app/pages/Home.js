import React from 'react';
import Card from '../components/Card';
import data from '../data/data.json';

function Home() {
    return (
        <div className="home">
            <div className="hero">
                <h1>Chez vous, partout et ailleurs</h1>
            </div>
            <div className="locations-container">
                {data.map(location => (
                    <Card key={location.id} location={location}/>
                ))}
            </div>
        </div>
    );
}

export default Home;

