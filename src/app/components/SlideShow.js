import React, { useState } from 'react';

function Slideshow ({ pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % pictures.length);
  };

  const prevSlide = () => {
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
