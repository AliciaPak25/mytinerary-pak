import React, {useEffect, useState} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import {useParams} from 'react-router-dom'
import "../styles/stylesUnderConstruction.css"
import HeroUC from '../components/HeroUnderConstruction'
import {Link as LinkRouter} from 'react-router-dom';
import CardItinerary from '../components/Itineraries';

import { connect } from 'react-redux';
import itinerariesActions from '../redux/actions/itinerariesActions';
import citiesAction from '../redux/actions/citiesActions';
import NoItineraries from '../components/NoItineraries';

import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';

function ActionAreaCard(props) {
    const theme = useTheme();
    const [loading, setLoading] = useState(false);
    let {id} = useParams()

    useEffect(()=>{
      props.getItineraryByCity(id)
      setLoading(true)
      if(props.cities.length > 0){
        props.findOneCity(id).then(res=> setLoading(false)) 
      }else{
        props.fetchOneCity(id).then(res=> setLoading(false))
      }
    },[])

    if(loading || !props.city){
      return <h1>loading</h1>
    }

  return (
    
      <div className='divDetail'>
      <HeroUC/>
      <div className="CardDetails">
        <Card sx={{ display: 'flex', width: 1115, height: 300, marginTop: 2, backgroundColor: '#14253d', justifyContent: 'flex-end', position: 'relative' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', width: 400 }}>
            <CardContent sx={{ flex: '1 0 auto' }}>
              <Typography component="div" variant="h5" color='white'>
              {props.city.name}
              </Typography>
              <Typography variant="subtitle1" color="lightGray" component="div">
              {props.city.country}
              </Typography>
            </CardContent>
            <Box sx={{ position: 'absolute', top: '30%', left: '8%', pl: 1, pb: 1, height: 90, width: 400 }}>
              <img src={process.env.PUBLIC_URL+'/assets/video.gif'} alt='fillerVideo' className='fillerVideo'/>
            </Box>
          </Box>
          <CardMedia
            component="img"
            sx={{ width: 500 }}
            image={process.env.PUBLIC_URL+`/assets/${props.city.image}`}
            alt="cityPhotoDetail"
            className='cityPhotoDetail'
          />
        </Card>
      </div>

    {props.itineraries.length > 0 ? 
      <CardItinerary />
      : <NoItineraries />}

    <Stack spacing={2} direction="row" className='buttonDetail'>
    <LinkRouter to={`/home`}><Button variant="contained">Back to Home</Button></LinkRouter>
    <LinkRouter to={`/cities`}><Button variant="contained">Back to Cities</Button></LinkRouter>
    </Stack>
    
    </div>
  
    
  );
}

const mapDispatchToProps = {
  fetchCities: citiesAction.fetchCities,
  fetchOneCity: citiesAction.fetchOneCity,
  findOneCity: citiesAction.fetchOneCity,
  getItineraryByCity: itinerariesActions.getItineraryByCity,
}

const mapStateToProps = (state) => {
  return {
    cities: state.citiesReducer.cities,
    auxiliar: state.citiesReducer.cities,
    itineraries: state.itinerariesReducer.itineraries,
    comments: state.itinerariesReducer.comments,
    city: state.citiesReducer.city,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ActionAreaCard);
