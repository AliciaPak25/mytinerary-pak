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
import Likes from "./Likes";

function CardItinerary(props) {
    let {id} = useParams()
    /* console.log(props)
    console.log(props.itineraries[0]) */
    useEffect(()=>{
        props.getItineraryByCity(id)
    },[])

  
  return (
    
    <div className="App">
        {props.itineraries?.map(itinerary=> <PriceItinerary itinerary={itinerary}/>)}
        
    </div>
  );
}

const mapStateToProps = (state) => {
    return {
        itineraries: state.itinerariesReducer.itineraries,
    }
}

const mapDispatchToProps = {
    getItineraryByCity: itinerariesActions.getItineraryByCity,
}

export default connect(mapStateToProps,mapDispatchToProps)(CardItinerary);