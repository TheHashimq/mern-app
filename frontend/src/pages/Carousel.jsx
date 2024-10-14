import React from "react";
import Slider from "react-slick";
import "./Carousel.css"; // Create this file for styling

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        <div className="carousel-slide">
          <img
            src="https://wallpapers.com/images/hd/colorful-thali-indian-food-photograph-wbiwymzcwdpth0hh.jpg"
            alt="Slide 1"
          />
        </div>
        <div className="carousel-slide">
          <img
            src="https://wallpaperaccess.com/full/1189586.jpg"
            alt="Slide 2"
          />
        </div>
        <div className="carousel-slide">
          <img
            src="https://wallpaperaccess.com/full/1324879.jpg"
            alt="Slide 3"
          />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
