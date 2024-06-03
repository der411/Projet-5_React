import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SlideShow from '../components/SlideShow';
import Collapse from '../components/Collapse';
import RatingStars from '../components/RatingStars';
import '../../css/style.css';

function CardDetails() {
  const { id } = useParams();
  const [location, setLocation] = useState(null);

  useEffect(() => {
    fetch('/data/data.json')
      .then(response => response.json())
      .then(data => {
        const loc = data.find(loc => loc.id === id);
        setLocation(loc);
      })
      .catch(error => console.error('Error fetching location details:', error));
  }, [id]);

  if (!location) {
    return <div>Loading...</div>;
  }

  return (
    <div className="location-details">
      <Header />
      <div className="location-details-content">
        <SlideShow pictures={location.pictures} />
        <div className="info-container">
          <div className="info-left">
            <h1>{location.title}</h1>
            <div className="location">{location.location}</div>
            <div className="tags">
              {location.tags.map(tag => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
          </div>
          <div className="info-right">
            <div className="host-info">
            <p>{location.host.name}</p>
              <img src={location.host.picture} alt={location.host.name} />
            </div>
            <div className="rating">
              <RatingStars rating={location.rating} />
            </div>
          </div>
        </div>
        <div className="collapse-container">
          <Collapse title="Description">
            <p>{location.description}</p>
          </Collapse>
          <Collapse title="Équipements">
            <ul>
              {location.equipments.map(equipment => (
                <li key={equipment}>{equipment}</li>
              ))}
            </ul>
          </Collapse>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default CardDetails;
