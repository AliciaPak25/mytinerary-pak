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

export default function ActionAreaCard() {
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
    <Card sx={{ maxWidth: 345 }}>
        {card?.map(city=>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={process.env.PUBLIC_URL+`/assets/${city.image}`}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {city.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
           Under Construction
          </Typography>
        </CardContent>
      </CardActionArea>
        )}
    </Card>

    <Stack spacing={2} direction="row">
    <Button variant="contained">Back to Home</Button>
    </Stack>
    </div>
  );
}


