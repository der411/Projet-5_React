import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../css/style.css';

function Card({ location }) {
  const navigate = useNavigate();

  // Fonction pour gérer le clic sur une carte
  const handleCardClick = () => {
    navigate(`/location/${location.id}`);
  };

  return (
    <div className="location-card" onClick={handleCardClick}>
      <img src={location.cover} alt={location.title} className="location-cover" />
      <h2>{location.title}</h2>
    </div>
  );
}

export default Card;
