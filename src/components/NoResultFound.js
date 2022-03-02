import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import "../styles/cities.css"

export default function ActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 345 }} className='CardSearchNotFound' >
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={process.env.PUBLIC_URL+`/assets/noResultFound.gif`}
          alt="SearchNotFound"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            No Result Found
          </Typography>
          <Typography variant="body2" color="text.secondary">
            We've searched 15 cities. But, we did not find any city for your search.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
