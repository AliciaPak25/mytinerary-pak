import React from 'react';
import "../styles/stylesHero.css"
import logo from '../aviation-logo.svg';

const Hero = () => {
  /*   const width = window.innerWidth;
    const height = window.innerHeight;
    
     const style = {
      'position': 'fixed',
      'top': 0, 
      'left': 0,
      'min-width': '100%',
      'min-height': '100%'
     } */

    return(
        <div className='hero'>
            <img src={process.env.PUBLIC_URL+`/assets/travel.jpg`} className='imageHero' />
            <div className='containerSlogan'>
            <div className='textHero'>
            <img src={logo} alt='logoBlack' width={100}/>
            <h1> MyTinerary </h1>
            </div>
            <h2>Find your perfect trip, designed by insiders who know and love their cities!</h2> 
            </div>
        </div>
      )
    }
export default Hero;  