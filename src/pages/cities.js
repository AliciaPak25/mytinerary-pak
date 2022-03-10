import React, {useEffect, useState} from 'react';
import axios from 'axios'
import HeroCity from '../components/HeroCities';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import "../styles/cities.css"
import {Link as LinkRouter} from 'react-router-dom';
import ActionAreaCard from '../components/NoResultFound';
import CircularIndeterminate from '../components/Loading';
import {connect} from 'react-redux';
import citiesAction from '../redux/actions/citiesActions';

const Cities = (props) => {
console.log(props)
    const [cities, setCities] = useState([]);
    const [search, setSearch]= useState();
    const [searchResults, setSearchResults] = useState("");
    const [data, setData] = useState();
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(()=>{
        props.fetchCities()
    },[]);
    console.log(props.cities);


    const handleChange = (event) => {
        setSearch(event.target.value);
        props.filtering(props.cities, event.target.value);
        console.log(event.target.value)
    }


    return (
        <>
        <HeroCity/>
        <div className='divInput'>
        <Box
            sx={{
            width: 500,
            maxWidth: '100%',
        }}
        onChange={handleChange}
        >
            <TextField fullWidth label="Search" id="fullWidth" />
        </Box>

        </div>
        <div className='containerCard'>
    {/* { !isLoaded ? (<CircularIndeterminate/>) : */}

    {props.filteredCities.length === 0 ? (<ActionAreaCard/>) :
        props.filteredCities?.map(city=>
            <LinkRouter to={`/UnderConstruction/${city._id}`} key={city._id}>
            <div className="card bg-dark text-white divCard">
                <img src={process.env.PUBLIC_URL+`/assets/${city.image}`} className="card-img" alt="cardCity"/>
                <div className="card-img-overlay divContentTextCard">
                    <h5 className="card-title cityName">{city.name}</h5>
                </div>
                <div className="card-img-overlay divCountry">
                    <h5 className="card-title cityCountry">{city.country}</h5>
                </div>
            </div>
            </LinkRouter>
        ) 
}  
        </div> 
        </>
    );
}

const mapDispatchToProps = {
    fetchCities: citiesAction.fetchCities,
    filtering: citiesAction.filtering,
}
const mapStateToProps = (state) => {
    return {
    cities: state.citiesReducer.cities,
    filteredCities : state.citiesReducer.filteredCities,
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Cities);