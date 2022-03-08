import React, {useEffect, useState} from 'react';
import axios from 'axios'
import HeroCity from './HeroCities';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import "../styles/cities.css"
import {Link as LinkRouter} from 'react-router-dom';
import ActionAreaCard from './NoResultFound';
import CircularIndeterminate from './Loading'

const Cities = () => {

    const [cities, setCities] = useState();
    const [search, setSearch]= useState();
    const [searchResults, setSearchResults] = useState();
    const [data, setData] = useState();
    const [isLoaded, setIsLoaded] = useState(false)


    const getApi = async () =>{
        await axios.get(`http://localhost:4000/api/cities`)
        .then(response=>{setCities(response.data.response.cities);
            setData(response.data.response.cities);
            setIsLoaded(true)
        }).catch(error=>{console.log(error);})
    }

    useEffect(()=>{
        getApi();
    },[])

    useEffect(()=>{
        if (searchResults !== undefined){
            setData(searchResults)
        }
    
    },[searchResults])

    const handleChange = event => {
        setSearch(event.target.value);
        filtrate(event.target.value);
    }

    const filtrate=(search)=>{
        setSearchResults(cities.filter((element)=>
            (element.name.toLowerCase().startsWith(search.toLowerCase().trim()))
        ))
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
       { !isLoaded ? (<CircularIndeterminate/>) :
       data.length === 0 ? (<ActionAreaCard/>) :
        data?.map(city=>
            <LinkRouter to={`/UnderConstruction/${city._id}`}>
            <div class="card bg-dark text-white divCard">
                <img src={process.env.PUBLIC_URL+`/assets/${city.image}`} class="card-img" alt="cardCity"/>
                <div class="card-img-overlay divContentTextCard">
                    <h5 class="card-title cityName">{city.name}</h5>
                </div>
                <div class="card-img-overlay divCountry">
                    <h5 class="card-title cityCountry">{city.country}</h5>
                </div>
            </div>
            </LinkRouter> 
        ) 
} 
        </div> 
        </>
    );
}

export default Cities;