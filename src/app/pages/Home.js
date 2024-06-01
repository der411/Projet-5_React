import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import LocationCard from '../components/LocationCard';
import '../../css/style.css';
import Footer from '../components/Footer';

function Home () {
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        fetch('/data/data.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error("HTTP error " + response.status);
                }
                return response.json();
            })
            .then(data => {console.log(data); setLocations(data);})
            .catch(error => console.log(error));
    }, []);

    return (
        
        <div className="home">
            <Header />
            <div className="hero">
                <h1>Chez vous, partout et ailleurs</h1>
            </div>
            <div className="locations-container">
        {locations.map(location => (
          <LocationCard key={location.id} location={location} />
        ))}
      </div>
      <Footer />
        </div>
    );
}

export default Home;
