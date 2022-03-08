import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import {useParams} from 'react-router-dom'
import "../styles/stylesUnderConstruction.css"
import HeroUC from './HeroUnderConstruction'
import {Link as LinkRouter} from 'react-router-dom';

import { connect } from 'react-redux';
import itinerariesActions from '../redux/actions/itinerariesActions';


function ActionAreaCard() {
    const [cities, setCities] = useState([]);

    const getApi = async () =>{
        await axios.get(`http://localhost:4000/api/cities`)
        .then(response=>{setCities(response.data.response.cities);
        }).catch(error=>{console.log(error);})
    }
    

    useEffect(()=>{
        getApi();
    },[])


    const {id} = useParams()
    const card = cities.filter(datum=> datum._id === id)


  return (
      <div className='divDetail'>
        <HeroUC/>
      <div className='divCardDetail'>
    <Card sx={{ maxWidth: 1000}} className='Card'>
        {card?.map(city=>
      <CardActionArea className='CardActionArea'>
        <CardMedia
          component="img"
          height="400"
          image={process.env.PUBLIC_URL+`/assets/${city.image}`}
          alt="card-Detail"
        />
         <CardContent className='CardContent'>
          <Typography gutterBottom variant="h5" component="div" fontSize={30}>
          {city.name}
          </Typography>
          <Typography variant="body2" color="white" fontSize={20}>
           Under Construction
          </Typography>
        </CardContent>
      </CardActionArea>
        )}
    </Card>
    </div>

    <Stack spacing={2} direction="row" className='buttonDetail'>
    <LinkRouter to={`/home`}><Button variant="contained">Back to Home</Button></LinkRouter>
    </Stack>
    
    </div>
  );
}

const mapDispatchToProps = {

}

const mapStateToProps = (state) => {
  return {
    itineraries: state.itinerariesReducer.itineraries,
    comments: state.itinerariesReducer.comments
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ActionAreaCard);

