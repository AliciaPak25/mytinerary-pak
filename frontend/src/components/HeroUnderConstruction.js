import React from 'react';
import "../styles/stylesHero.css"
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

const HeroUC = () => {

    return(
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={3}>
        <Grid item xs={12}>
            <div className='HeroUnderConstruction'>
            <h1 className='comingSoon'> </h1>
            </div>
        </Grid>
        </Grid>
        </Box>
    );
    }
export default HeroUC;  