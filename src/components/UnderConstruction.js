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
import HeroUC from './HeroUnderConstruction'
import {Link as LinkRouter} from 'react-router-dom';
import CardItinerary from './Itineraries';

import { connect } from 'react-redux';
import itinerariesActions from '../redux/actions/itinerariesActions';
import { propTypes } from 'react-bootstrap/esm/Image';
import citiesAction from '../redux/actions/citiesActions';



function ActionAreaCard(props) {
    const [loading, setLoading] = useState(false);
    let {id} = useParams()
    /* const getApi = async () =>{
        await axios.get(`http://localhost:4000/api/cities/`)
        .then(response=>{setCities(response.data.response.cities);
        }).catch(error=>{console.log(error);})
    } */
    

   /*  useEffect(()=>{
        setCity({element: props.cities.find(card=> card._id === id)})
    },[])  */

    
  
    /* const [data, setData] = useState({element: propTypes.cities.find(city => city._id.toString() === id)}) */
    /* const card = cities.filter(datum=> datum._id === id) */

    useEffect(()=>{
      props.getItineraryByCity(id)
      setLoading(true)
      if(props.cities.length > 0){
        props.findOneCity(id).then(res=> setLoading(false)) 
      }else{
        props.fetchOneCity(id).then(res=> setLoading(false))
      }
    },[])

    /* useEffect(()=>{ 
  
    },[]) */
    
  


    /* if (!data.element){
      return <h3>Anda Bien</h3>
    } */

    console.log(id)
    console.log(props.itineraries)
    console.log(props);

    if(loading || !props.city){
      return <h1>loading</h1>
    }
  
  return (
    
      <div className='divDetail'>
        <HeroUC/>
      
      <div className='divCardDetail'>
    
    <Card sx={{ maxWidth: 1000}} className='Card'>
      <CardActionArea className='CardActionArea' key={props.city._id}>
        <CardMedia
          component="img"
          height="400"
          image={process.env.PUBLIC_URL+`/assets/${props.city.image}`}
          alt="card-Detail"
        />
        <CardContent className='CardContent'>
          <Typography gutterBottom variant="h5" component="div" fontSize={30}>
          {props.city.name}
          </Typography>
          <Typography variant="body2" color="white" fontSize={20}>
          Under Construction
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div> 

    {props.itineraries.length > 0 ? 
      <CardItinerary />
      : <h1>Sorry! We couldn't any itineraries for this city</h1>}

    <Stack spacing={2} direction="row" className='buttonDetail'>
    <LinkRouter to={`/home`}><Button variant="contained">Back to Home</Button></LinkRouter>
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