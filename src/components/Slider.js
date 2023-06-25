import React from "react";

import Image1 from "../images/banner1.png";
import Image2 from "../images/banner2.png";
import Image3 from "../images/1.jpg";
import Carousel from "react-bootstrap/Carousel";

import "./Slider.scss";

const Slider = () => {
  return (
    <div className="carousal-wrapper">
      <Carousel
        indicators={false}
        className="carousal-item"
        fade
        variant="dark"
      >
        <Carousel.Item className="carousal-item">
          <img className="d-block  w-100 " src={Image1} alt="First slide" />
          {/* <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item interval={1000} className="carousal-item">
          <img className="d-block  w-100" src={Image2} alt="Second slide" />
          {/* <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption> */}
        </Carousel.Item>
        {/* <Carousel.Item interval={1000} className="carousal-item">
          <img className="d-block  w-100" src={Image3} alt="Third slide" />
        
        </Carousel.Item> */}
      </Carousel>
    </div>
  );
};

export default Slider;
