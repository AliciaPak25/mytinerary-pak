import React from 'react';
import "../styles/stylesCallToAction.css"

const CallToAction = () => {
    
      return(
          <>
          <div className='divCall'>
              <img src={process.env.PUBLIC_URL+`/assets/gif.gif`} className='imgCall'/>
              <img src={process.env.PUBLIC_URL+`/assets/aviation-logo.svg`} className='imgCall'/>
              <p>Let your imagination be our business</p>
              <button>Travel now</button>
          </div>
          </>
        )
      }
  export default CallToAction;  