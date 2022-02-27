import React from 'react';
import "../styles/stylesHero.css"
import logo from '../aviation-logo.svg';

const HeroCity = () => {

    return(
        <div className='containerHero'>
        <div className='hero'>
            <img src={process.env.PUBLIC_URL+`/assets/luxury-travel`} className="HeroCities" />
        
        </div>
        </div>
      )
    }
export default HeroCity;  