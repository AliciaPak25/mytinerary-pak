import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import {Link as LinkRouter} from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Office from '../traveloffice.jpg';

export default function Footer(){
    return (
        <footer>
            <Box sx={{backgroundColor: "#11101D", color: "white"}}>
                <Container maxWidth="lg">
                    <Grid container spacing={5}>
                        <Grid item xs={12} sm={4}>
                            <Box>
                                <img src={process.env.PUBLIC_URL+`/assets/aviation-logo.svg`} width={300}/>
                                <h3>MyTinerary</h3>
                            </Box>
                            <Box borderBottom={1}>
                                Navigation
                            </Box>
                            <Box>
                                <LinkRouter to={"*"}>
                                    Home
                                </LinkRouter>
                            </Box>
                            <Box>
                                <LinkRouter to={"/cities"}>
                                    Cities
                                </LinkRouter>
                            </Box>
                            <Box borderBottom={1}>
                                Contact
                            </Box>
                            <Box>
                               <FacebookIcon/>
                               Facebook
                               <InstagramIcon/>
                               Instagram
                               <WhatsAppIcon/>
                               Whatsapp
                            </Box>
                            <Box borderBottom={1}>
                                Address
                            </Box>
                            <Box>
                                <LocationOnIcon/>
                                1100 New York Ave NW Suite 450, Washington, DC 20005, United States
                            </Box>
                            <Box>
                                <img src={Office}/>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </footer>
    );
}