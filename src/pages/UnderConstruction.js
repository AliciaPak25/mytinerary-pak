import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, cardActionAreaClasses } from '@mui/material';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import {useParams} from 'react-router-dom'
import "../styles/stylesUnderConstruction.css"
import HeroUC from '../components/HeroUnderConstruction'
import {Link as LinkRouter} from 'react-router-dom';
import CardItinerary from '../components/Itineraries';

import { connect } from 'react-redux';
import itinerariesActions from '../redux/actions/itinerariesActions';
import { propTypes } from 'react-bootstrap/esm/Image';
import citiesAction from '../redux/actions/citiesActions';
import Likes from '../components/Likes';
import ActivitiesCards from '../components/Activities';
import NoItineraries from '../components/NoItineraries';

import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';

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

{/* <h1 key={itinerary._id}>{itinerary.name}</h1> */}
  {/*  <div className="CardDetails">
      <div className="card bg-dark text-white cardCityDetail">
        <img src={process.env.PUBLIC_URL+`/assets/${props.city.image}`} className="card-img" alt="cityPhotoDetail" className='cityPhotoDetail'/>
        <div className="card-img-overlay">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p className="card-text">Last updated 3 mins ago</p>
        </div>
      </div> */}
      {/* <Card className='cardCityDetail'>
        <h1
          style={{ */}
          {/*  fontFamily: "'Open Sans', sans-serif",
            textTransform: "uppercase",
            fontSize: 20,
            color: "white",
          }}
        >
          {props.city.country}
        </h1>
        <div>
        <div
          style={{
            width: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: 190,
            width: 190,
          }}
        >
          <img src={process.env.PUBLIC_URL+`/assets/${props.city.image}`} alt="cityPhotoDetail" className='cityPhotoDetail'/>
        </div>
       <div
          style={{
            width: "50%",
            color: "white",
            justifyContent: "center",
            alignItems: "center",
            display: "flex"
          }}
        >
          <div
            style={{
              borderLeft: "1px solid white",
              width: "100%",
              padding: 30
            }}
          > 
            <h2>{props.city.name}</h2>
            <p>
              {props.city.description}
            </p>
          </div>
          </div>
        </div>
      </Card> */}