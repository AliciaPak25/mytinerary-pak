import React from 'react';

import { useState, useEffect } from 'react';
import "../citiesCities.json"

const JsonCities = () => {

    const [cities, setCities] = useState([])

    useEffect(() => {
        fetch("../citiesCities.json")
        .then(response => response.json()) 
        .then(data => {
            setCities(data)
        }, [])
    })

    return cities
}
export default JsonCities;

 