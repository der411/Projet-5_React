import React from 'react';
import {Link} from "react-router-dom";

function Card({location}) {
    return (
        <Link to={`/location/${location.id}`} className="location-link" style={{ backgroundImage: `url(${location.cover})` }} data-title={location.title} />
    );
}

export default Card;

  