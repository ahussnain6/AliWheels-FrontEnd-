import React from "react";
import Carousel from "react-multi-carousel";
import "./styles/Accessory.css";
import "react-multi-carousel/lib/styles.css";
 import {sliderImageUrl,responsive} from "../../public/Data.js";
const Accessory = () => {
  return (
    <div className="parent">
      <h1 className="head-41 font">Car Part & Accessories</h1>
      <Carousel
        responsive={responsive}
        autoPlay={true}
        swipeable={true}
        draggable={true}
        showDots={false}
        infinite={true}
        partialVisible={false}
        dotListClass="custom-dot-list-style">
        {sliderImageUrl.map((imageUrl, index)=>(
          <div className="slider" key={index}>
            <img src={imageUrl.url} alt={`movie-${index}`} />
            <h1 className="car-33 font">{imageUrl.name}</h1>
          </div>
        ))}
      </Carousel></div>);
};
export default Accessory;
