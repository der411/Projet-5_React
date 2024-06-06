import React from 'react';
import {Link} from "react-router-dom";


function Card({location}) {
    return (
        <Link to={`/location/${location.id}`} className="location-link">
            <div className="location-card">
                <img src={location.cover} alt={location.title} className="location-cover"/>
                <div className="location-title">{location.title}</div>
            </div>
        </Link>
    );
}


export default Card;




  