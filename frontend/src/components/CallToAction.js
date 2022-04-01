import React from 'react';
import "../styles/stylesCallToAction.css"
import {Link as LinkRouter} from "react-router-dom";
import Button from '@mui/material/Button';

const CallToAction = () => {
    
      return(
          <>
          <div className='divCall'>
              <div className='divWithGif'>
                <img src={process.env.PUBLIC_URL+`/assets/gif.gif`} className='imgCall'/>
                <div className='divPe'>
                <p className='CallP'>The journey to achieving your dreams begins with a single step. We aid you to take that step. Thousands of destinations are waiting for you! Don't waste more time and choose your favorite place!</p>
                </div>
              </div>
              <LinkRouter to={"/cities"} className='notUnderlined'><Button variant="contained" size="large">View our cities</Button></LinkRouter>
          </div>
          </>
        )
      }
  export default CallToAction;  