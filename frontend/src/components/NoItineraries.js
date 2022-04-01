import React from 'react';
import '../styles/NoItineraries.css';
import {Link as LinkRouter} from 'react-router-dom';

const NoItineraries = () => {
    return(
        <div className='containerNoItineraries'>
        <div className="NoItinerariescard">
            <div className="card-border-top">
            </div>
            <div className="img">
                <img src={process.env.PUBLIC_URL+`/assets/personaIncognita.jpg`} alt='noPerson' className='noPerson'/>
            </div>
            <span> Sorry!</span>
            <h1 className="job">We couldn't find any itineraries for this city.</h1>
            <LinkRouter to={"/cities"} className='notUnderlined'>                  
            <button> Cities </button>
            </LinkRouter>
        </div>
        </div>
    );
}
export default NoItineraries;