import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import SlideShow from '../components/SlideShow';
import Collapse from '../components/Collapse';
import HostInfo from '../components/HostInfo';
import RatingStars from '../components/RatingStars';
import data from '../data/data.json';
import Error404 from "./Error404";


function CardDetails() {
    
    // Récupération de l'ID du logement à affiher depuis l'URL
    const {id} = useParams(); 

    // Initialisation de l'état local du logement
    const [house, setHouse] = useState({
        cover: "",
        title: "",
        location: "",
        host: [],
        rating: [],
        description: "",
        equipments: [],
        pictures: [],
        tags: []
    });

    // Récupération et mise à jour des données du logement à afficher
    useEffect(() => {
        const house = data.find((item) => item.id === id);
        if (house) {
            setHouse(house);
        }
    }, [id]);

    if (house.id === undefined) {
        return <Error404/>;
    }

    return (
        
            <div className="location-details-content">
                <SlideShow pictures={house.pictures}/>
                <div className="info-container">
                    <div className="info-left">
                        <h1>{house.title}</h1>
                        <div className="location">{house.location}</div>
                        <div className="tags">
                            {house.tags.map((tag,index) => (
                                <span key={index} className="tag">{tag}</span>
                            ))}
                        </div>
                    </div>
                    <div className="info-right">
                        <div className="host-info">
                            <HostInfo host={house.host} />
                        </div>
                        <div className="rating">
                            <RatingStars rating={house.rating}/>
                        </div>
                    </div>
                </div>
                <div className="collapse-container inline-style">
                    <Collapse title="Description">
                        <p>{house.description}</p>
                    </Collapse>
                    <Collapse title="Équipements">
                        <ul>
                            {house.equipments.map((equipment,index) => (
                                <li key={index}>{equipment}</li>
                            ))}
                        </ul>
                    </Collapse>
                </div>
            </div>
        
    );
}

export default CardDetails;
