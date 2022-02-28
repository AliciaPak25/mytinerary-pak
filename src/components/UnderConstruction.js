import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

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

    /* {cities.map(city=>
        <div class="card bg-dark text-white divCard">
            <img src={process.env.PUBLIC_URL+`/assets/${city.image}`} class="card-img" alt="cardCity"/>
            <div class="card-img-overlay">
                <h5 class="card-title">{city.name}</h5>
                <p class="card-text">{city.country}</p>
                <p class="card-text">{city.description}</p>
            </div>
        </div> 
    )}
    </div>  */
  return (
      <div>
    <Card sx={{ maxWidth: 345 }}>
        {cities.map}
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
           Under Construction
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

    <Stack spacing={2} direction="row">
    <Button variant="contained">Back to Home</Button>
    </Stack>
    </div>
  );
}


