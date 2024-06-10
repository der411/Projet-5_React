import React from 'react';
import Card from '../components/Card';
import data from '../data/data.json';


function Home() {
    return (
        <div className="home">
            <div className="accomodations-container">
                {data.map(accomodation => (
                    <Card key={accomodation.id} accomodation={accomodation}/>
                ))}
            </div>
        </div>
    );
}

export default Home;

