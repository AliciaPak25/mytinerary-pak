import React from 'react';
import "../styles/stylesHero.css"
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

const HeroCity = () => {

    return(
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={3}>
                <Grid item xs={12} className='hero'>
                    <img src={process.env.PUBLIC_URL+`/assets/luxury-travel`} className="HeroCities" /> 
                </Grid>
            </Grid>
        </Box>
    )
    }
export default HeroCity;  