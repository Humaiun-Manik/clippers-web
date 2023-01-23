import React from "react";
import { Carousel } from "react-bootstrap";
import firstImg from "../../../assets/images/bannar/1.jpg";
import secondImg from "../../../assets/images/bannar/2.jpg";
import thirdImg from "../../../assets/images/bannar/3.jpg";
import fourthImg from "../../../assets/images/bannar/4.jpg";
import fifthImg from "../../../assets/images/bannar/5.jpg";
import sixthImg from "../../../assets/images/bannar/6.jpg";

const Banner = () => {
  return (
    <header id="home" className="pt-3 mt-5">
      <Carousel interval="3000" pause="false" variant="dark">
        <Carousel.Item>
          <img className="d-block w-100" src={firstImg} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={secondImg} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={thirdImg} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={fourthImg} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={fifthImg} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={sixthImg} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </header>
  );
};

export default Banner;
