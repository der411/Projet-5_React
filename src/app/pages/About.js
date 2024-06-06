import React from 'react';
import Collapse from "../components/Collapse";
import data from '../data/about.json';
import '../../css/style.css'; 



function About() {
    return (

        <div className="collapse-container column-style">
            {data.map(item => (
                <Collapse key={item.id} title={item.title} >
                    {item.content}
                </Collapse>
            ))}
        </div>
    );
}

export default About;
