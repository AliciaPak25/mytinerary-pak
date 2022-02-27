import React from 'react';
import cities from "../citiesCities.json"
import '../styles/cities.css';


const Cards = () => {
    return (
        <div className='containerCard'>
        {cities.map(city=>
            <div class="card bg-dark text-white divCard">
                <img src={process.env.PUBLIC_URL+`/assets/${city.image}`} class="card-img" alt="cardCity"/>
                <div class="card-img-overlay">
                    <h5 class="card-title">{city.name}</h5>
                    <p class="card-text">Country</p>
                    <p class="card-text"></p>
                </div>
            </div>
        )}    
        </div>
    );
}

export default Cards;