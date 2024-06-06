import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

function RatingStars({ rating }){
  const totalStars = 5;

  return (
    <div className="rating-stars">
      {[...Array(totalStars)].map((star, index) => (
        <span key={index} className={`fa-star ${index < rating ? 'fas' : 'far empty'}`}></span>
      ))}
    </div>
  );
};

export default RatingStars;


