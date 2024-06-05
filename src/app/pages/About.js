import data from '../data/about.json';
import Collapse  from "../components/Collapse";
function About() {
    return (
        data.map(item => {
            return (
                <Collapse key={item.id} item={item}/>
            )
        })
    )
}

export default About;