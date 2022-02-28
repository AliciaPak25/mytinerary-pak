import React, {useEffect, useState} from 'react';
import axios from 'axios'
import Cards from './CardsCities';
import CustomizedInputBase from './Input';
import HeroCity from './HeroCities';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const Cities = () => {

    const [cities, setCities] = useState([]);
    const [search, setSearch]= useState("");

    const getApi = async () =>{
        await axios.get(`http://localhost:4000/api/cities`)
        .then(response=>{setCities(response.data.response.cities);
        }).catch(error=>{console.log(error);})
    }

    useEffect(()=>{
        getApi();
    },[])
   

    const handleChange = event => {
        setSearch(event.target.value);
    }

    /* const filtrate=(searchTerm)=>{
        let searchResults = cities.filter((element=>{
            if(element.name.toLowerCase().startsWith(searchTerm.toLowerCase())){
                return element;
            }
        }))
        setSearch(searchResults)
    } */

    return (
        <>
        <HeroCity/>
        <Box
            sx={{
            width: 500,
            maxWidth: '100%',    
        }}
        value={search}
       onKeyUp={handleChange}
        >
            <TextField fullWidth label="Search" id="fullWidth"  />
        </Box>
        {/* <Cards/> */}
        {cities.map(city=>
            <div class="card bg-dark text-white divCard">
                <img src={process.env.PUBLIC_URL+`/assets/${city.image}`} class="card-img" alt="cardCity"/>
                <div class="card-img-overlay">
                    <h5 class="card-title">{city.name}</h5>
                    <p class="card-text">{city.country}</p>
                    <p class="card-text">{city.description}</p>
                </div>
            </div> 
        )} 
        </>
    );
}

export default Cities;