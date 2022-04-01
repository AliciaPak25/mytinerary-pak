import React from 'react';
import "../styles/stylesHero.css"
import logo from '../logoModificado.png';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

const Hero = () => {

    return(
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={3}>
                <Grid item xs={12} className='hero'>
                <img src={process.env.PUBLIC_URL+`/assets/travel.jpg`} className='imageHero' />
                <div className='containerSlogan'>
                    <div className='textHero'>
                        <img src={logo} alt='logoBlack' width={50} className='logoHero'/>
                        <h1> MyTinerary </h1>
                    </div>
                        <h2>Find your perfect trip, designed by insiders who know and love their cities!</h2> 
                </div>
                </Grid>
            </Grid>
        </Box>
    )
    }
export default Hero;  