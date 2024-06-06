import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import SlideShow from '../components/SlideShow';
import Collapse from '../components/Collapse';
import RatingStars from '../components/RatingStars';
import data from '../data/data.json';
import Error404 from "./Error404";
import '../../css/style.css'; 

function CardDetails() {
    const {id} = useParams();
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

    useEffect(() => {
        const house = data.find((item) => item.id === id);
        console.log(house);
        if (house) {
            setHouse(house);
        }
    }, [id]);

    if (!house) {
        return <Error404/>;
    }

    return (
        <div className="location-details">
            <div className="location-details-content">
                <SlideShow pictures={house.pictures}/>
                <div className="info-container">
                    <div className="info-left">
                        <h1>{house.title}</h1>
                        <div className="location">{house.location}</div>
                        <div className="tags">
                            {house.tags.map(tag => (
                                <span key={tag} className="tag">{tag}</span>
                            ))}
                        </div>
                    </div>
                    <div className="info-right">
                        <div className="host-info">
                            <p>{house.host.name}</p>
                            <img src={house.host.picture} alt={house.host.name}/>
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
                            {house.equipments.map(equipment => (
                                <li key={equipment}>{equipment}</li>
                            ))}
                        </ul>
                    </Collapse>
                </div>
            </div>
        </div>
    );
}

export default CardDetails;
