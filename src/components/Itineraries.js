import React, {useState} from "react";
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
import commentsActions from "../redux/actions/commentsActions";

function CardItinerary(props) {
    let {id} = useParams()
    const [reload, setReload] = useState(false)
    const [itineraries, setItineraries] = useState()

    useEffect(()=>{
        props.getItineraryByCity(id)
        .then(response => setItineraries(response.data.response.itineraries))
    },[reload])


    return (
    <div className="App">
        {props.itineraries?.map(itinerary=> <PriceItinerary setReload={setReload} reload={reload} itinerary={itinerary} itineraries={itineraries} setItineraries={setItineraries}/>)}
        
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