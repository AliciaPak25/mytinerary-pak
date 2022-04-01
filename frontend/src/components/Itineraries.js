import React, {useState} from "react";
import "../styles/stylesItineraries.css";
import itinerariesActions from "../redux/actions/itinerariesActions";
import {useEffect} from 'react';
import {connect} from 'react-redux';
import {useParams} from 'react-router-dom'
import PriceItinerary from "./PriceItineraries";

function CardItinerary(props) {
    let {id} = useParams()
    const [reload, setReload] = useState(false)
    const [itineraries, setItineraries] = useState([])

    useEffect(()=>{
        props.getItineraryByCity(id)
        .then(response => setItineraries(response.data.response.itineraries))
    },[reload])

    return (
    <div className="App">
        {props.itineraries?.map(itinerary=> <PriceItinerary setReload={setReload} reload={reload} itinerary={itinerary} itineraries={itineraries} setItineraries={setItineraries} key={itinerary._id}/>)}
        
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