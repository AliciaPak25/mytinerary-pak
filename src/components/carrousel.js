 import React, { useRef, useState }  from "react"; 
import data from "./citiesData"
import "../styles/stylesCarrousel.css";
 
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

// import required modules
import { Grid, Pagination } from "swiper"; 

/* import React, { Component } from "react";
import Slider from "react-slick"; */


export default function Carrousel() {
  return (
    <>
      <Swiper
       slidesPerView={2}
       grid={{
         rows: 2
       }}
       slidesPerGroup={4}
       spaceBetween={30}
       pagination={{
         clickable: true
       }}
       modules={[Grid, Pagination]}
       className="mySwiper"
      >
          {data.map(city=>
        <SwiperSlide>
            <img src={process.env.PUBLIC_URL+`/assets/${city.image}`} width={400}/>
         </SwiperSlide>
         )}
      </Swiper>
    </>
  );
} 


/* export default class SwipeToSlide extends Component {
  render() {
    const settings = {
      className: "center",
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 4,
      swipeToSlide: true,
      afterChange: function(index) {
        console.log(
          `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
        );
      }
    };
    return (
      <div>
        <h2>Swipe To Slide</h2>
        <Slider {...settings}>
        {data.map(city=>
          <div>
           <img src={process.env.PUBLIC_URL+`/assets/${city.image}`} width={400}/>
          </div>
          )}
          {/* <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
          <div>
            <h3>7</h3>
          </div>
          <div>
            <h3>8</h3>
          </div>
          <div>
            <h3>9</h3>
        /*   </div> */
     