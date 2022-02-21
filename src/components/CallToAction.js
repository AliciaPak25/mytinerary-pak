import React from 'react';
import "../styles/stylesCallToAction.css"
import {Link as LinkRouter} from "react-router-dom";

const CallToAction = () => {
    
      return(
          <>
          <div className='divCall'>
              <img src={process.env.PUBLIC_URL+`/assets/gif.gif`} className='imgCall'/>
              <img src={process.env.PUBLIC_URL+`/assets/aviation-logo.svg`} className='imgCall'/>
              <p>The journey to achieving your dreams begins with a single step.</p>
                <p>We aid you to take that step.</p>
                <p>Thousands of destinations are waiting for you!</p>
                <p>Don't waste more time and choose your favorite place!</p>
              <LinkRouter to={"/cities"}><button>Travel now</button></LinkRouter>
          </div>
          </>
        )
      }
  export default CallToAction;  