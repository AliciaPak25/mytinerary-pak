import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import {Link as LinkRouter} from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import "../styles/stylesFooter.css"

export default function Footer(){
    return (
        <footer className='principalContainer'>
            <Box sx={{backgroundColor: "#11101D", color: "white"}}>
                <Container maxWidth="lg">
                    <Grid container spacing={5} className="containerCentered">
                        <Grid item xs={12} sm={4} className='gridFather'>
                            <Box className='boxLogo'>
                                <h3>MyTinerary</h3>
                            </Box>
                            <Container className='dFlexColum'>
                            <Box borderBottom={1}>
                                Navigation
                            </Box>
                            <Box>
                                <LinkRouter to={"*"} className='link'>
                                    Home
                                </LinkRouter>
                            </Box>
                            <Box>
                                <LinkRouter to={"/cities"} className='link'>
                                    Cities
                                </LinkRouter>
                            </Box>
                            </Container>
                            <Container className='dFlexColum'>
                            <Box borderBottom={1}>
                                Contact
                            </Box>
                           
                            <Box className='dFlexColum'>
                            <div className='dFlex'>
                               <FacebookIcon/>
                               <p>Facebook</p>
                            </div>
                            <div className='dFlex'>
                               <InstagramIcon/>
                               <p>Instagram</p>
                            </div>
                            <div className='dFlex'>
                               <WhatsAppIcon/>
                               <p>Whatsapp</p>
                               </div>
                            </Box>
                            </Container>
                            <Container className='dFlexColum'>
                            <Box borderBottom={1}>
                                Address
                            </Box>
                            <Box className='dFlex' width={200}>
                                <LocationOnIcon/>
                                <p>New York, United States</p>
                                
                            </Box>
                            </Container>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </footer>
    );
}