import React from 'react';
import Card from '../components/Card';
import data from '../data/data.json';
import Header from '../components/Header';


function Home() {
    return (
        <div className="home">
            <div className="locations-container">
                {data.map(location => (
                    <Card key={location.id} location={location}/>
                ))}
            </div>
        </div>
    );
}

export default Home;

