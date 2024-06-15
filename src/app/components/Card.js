import React from 'react';
import {Link} from "react-router-dom";


function Card({accomodation}) {
    
    return (
        <Link to={`/accomodation/${accomodation.id}`} className="accomodation-link" style={{ backgroundImage: `url(${accomodation.cover})` }} data-title={accomodation.title} />
    );
}

export default Card;