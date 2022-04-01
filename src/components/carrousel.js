import data from "./citiesData"
import "../styles/stylesCarrousel.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function App() {
  return (
    <div className='divCarrousel'>
      <h1>Popular MYtineraries</h1>
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
        modules={[Pagination, Autoplay, Navigation]}
        navigation={{
          clickable: true,}} 
        className="mySwiper"
      >
        {data.map(city=>
        <SwiperSlide sx={{height: 10}} className="divResponsive" key={city.name}>
          <div className="card cardCarrousel">
            <img src={process.env.PUBLIC_URL+`/assets/${city.image}`} className="card-img-top imageCarrousel" alt="cities"/>
            <div className="card-body cardTextCarrousel">
              <h5 className="card-title">{city.name}</h5>
            </div>
          </div>
          </SwiperSlide>   
        )}
      </Swiper>
    </div>
  );
}