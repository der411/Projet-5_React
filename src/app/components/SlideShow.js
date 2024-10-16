import React, { useState } from 'react';

function Slideshow ({ pictures }) {

  // Initialisation de l'état local de l'index courant
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fonction pour passer à la slide suivante
  function nextSlide(){
    setCurrentIndex((prevIndex) => (prevIndex + 1) % pictures.length);
  };

  // Fonction pour passer à la slide précédente
  function prevSlide(){
    setCurrentIndex((prevIndex) => (prevIndex - 1 + pictures.length) % pictures.length);
  };


  return (
    <div className="slideshow">
      {pictures.length > 1 && (
        <>
          <button className="slideshow-button prev" onClick={prevSlide}>
            <i className="fas fa-chevron-left"></i>
          </button>
          <button className="slideshow-button next" onClick={nextSlide}>
            <i className="fas fa-chevron-right"></i>
          </button>
          <div className="slideshow-indicator">
            {currentIndex + 1}/{pictures.length}
          </div>
        </>
      )}
      <img src={pictures[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="slideshow-image" />
    </div>
  );
};

export default Slideshow;
