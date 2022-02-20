import data from "./citiesData"
import "../styles/stylesCarrousel.css";



import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";



// import required modules
import { Autoplay, Pagination  } from "swiper";
import { height } from "@mui/system";

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        slidesPerGroup={4}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false}}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <h1>Popular MYtineraries</h1>
        {data.map(city=>
        <SwiperSlide sx={{height: 10}}/* className="imageCarrousel" */>
          <div class="card bg-dark text-white">
            <img src={process.env.PUBLIC_URL+`/assets/${city.image}`} class="card-img" alt="cities"/>
              <div class="card-img-overlay">
                <h5 class="card-title">{city.name}</h5>
              </div>
          </div>
          </SwiperSlide>   
        )}
      </Swiper>
    </>
  );
}
/* import React, { Component } from "react";
import Slider from "react-slick";

export default class Carrousel extends Component {
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
        {data.map(city=>
        <Slider {...settings}>
          <div>
          <img src={process.env.PUBLIC_URL+`/assets/${city.image}`} width={400}/>
          </div>    
        </Slider>
        )}
      </div>
    );
  }
}
 */
















// import required modules
/* import { Grid, Pagination, Autoplay, Navigation } from "swiper";

export default function Carrousel() {
  return (
    <>
      <Swiper
        slidesPerView={2}
        grid={{
          rows: 2
        }}
        slidesPerGroup={2}
        spaceBetween={30}
        pagination={{
          clickable: true
        }}
        hashNavigation={{
          watchState: true
        }}
        navigation={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false
        }}
        modules={[Grid, Pagination, Autoplay, Navigation]}
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
} */

          
     


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
     