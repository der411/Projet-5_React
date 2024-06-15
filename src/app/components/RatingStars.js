import React from 'react';


function RatingStars({rating}){

  // Nombre total d'étoiles
  const totalStars = 5;

  return (
      <div className="rating-stars">
        {[...Array(totalStars)].map((_, index) => (
        <span key={index} className={`fa-star ${index < rating ? 'fas' : 'far empty'}`}></span>
        ))}
      </div>
  );
};

export default RatingStars;


