import React from "react";
import "../styles/stylesItineraries.css";
import itinerariesActions from "../redux/actions/itinerariesActions";
import itinerariesReducer from "../redux/reducers/itinerariesReducer";
import {useEffect} from 'react';
import {connect} from 'react-redux';
import {useParams} from 'react-router-dom'

import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import Button from '@mui/material/Button';
import PaidIcon from '@mui/icons-material/Paid';
import PriceItinerary from "./PriceItineraries";

function CardItinerary(props) {
    let {id} = useParams()
    console.log(props)
    console.log(props.itineraries[0])
    useEffect(()=>{
        props.getItineraryByCity(id)
    },[])

    /* const [expanded, setExpanded] = React.useState(false);

    const ExpandMore = styled((props) => {
        const { expand, ...other } = props;
        return <IconButton {...other} />;
      })(({ theme, expand }) => ({
        transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
        }),
      }));

    const handleExpandClick = () => {
      setExpanded(!expanded);
    }; */
   
  return (
     
    <div className="App">
        {props.itineraries?.map(itinerary=> <PriceItinerary itinerary={itinerary}/>)}
      {/* <div className="container" key={itinerary._id}>
      <div className="cardItineraryToSee">
        <div className="card__head"></div>
        <div className="card__userPic">
          <img src={process.env.PUBLIC_URL+`/assets/itineraries/${itinerary.image}`} alt="Users" />
        </div>
        <div className="card__body">
          <h3 className="body__title">{itinerary.name}</h3>
          <p className="body__content">
            {itinerary.hashtag1} {itinerary.hashtag2} {itinerary.hashtag3} {itinerary.hashtag4}
          </p>

          <div className="body__buttons">
            <div className="body__button">
              <i>Likes: {itinerary.likes}</i>
              <box-icon
                color="red"
                type="solid"
                border="square"
                name="heart"
              ></box-icon>
            </div>
            <div className="body__button">
              <i>Duration: {itinerary.duration}</i>
              <box-icon
                color="blue"
                border="square"
                name="comment-detail"
              ></box-icon>
            </div>
            <div className="body__button">
              <i><PaidIcon/>{"💰".repeat(parseInt(itinerary.price))}</i>
              <box-icon
                color="green"
                name="share-alt"
                type="solid"
                border="square"
              ></box-icon>
            </div>
          </div>
              <ExpandMore
                  expand={expanded}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                  >
                  {!expanded &&
                  <Button variant="contained" color="success">
                      View More  <ExpandMoreIcon />
                  </Button>
                  }
              </ExpandMore>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                  <h3>{itinerary.comments}</h3>
                  
                  <Button variant="contained" color="success" onClick={handleExpandClick}>
                      View Less <ExpandMoreIcon />
                  </Button>
                  
              </Collapse>
        </div>
      </div>
    </div> */}
        
    </div>
  );
}


const mapDispatchToProps = {
    getItineraryByCity: itinerariesActions.getItineraryByCity,
}
const mapStateToProps = (state) => {
    return {
        itineraries: state.itinerariesReducer.itineraries,
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CardItinerary);