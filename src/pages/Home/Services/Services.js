import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import "./Services.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGear,
  faAlignCenter,
  faSpinner,
  faCircleHalfStroke,
  faHandPointer,
} from "@fortawesome/free-solid-svg-icons";
import "aos/dist/aos.css";
import Aos from "aos";

const Services = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section id="services" className="services">
      <div className="container py-5">
        <div className=" mt-5">
          <h1 className="fw-bold">
            <span className="fw-light">Our</span> services
          </h1>
          <p className="fs-5 fw-light">
            We provide image post production services to fashion retailers and photographers all over the
            world. We do everything from Simple Clipping to High-End Retouching. We work as a vendor for your
            company to lower down you costs and provide you a better quality service. We can assist you with
            editing any type of your images.
          </p>
        </div>
        <Row xs={1} md={2} lg={3} className="mt-3 g-5">
          <Col data-aos="fade-down" className="d-flex">
            <div className="service-icon mt-2 d-flex justify-content-center align-items-center rounded-circle me-3">
              <FontAwesomeIcon icon={faGear} size="2x" />
            </div>
            <div>
              <h5>CUT-OUT</h5>
              <small>
                Cut-Out or Clipping Path is our most basic service. We process over 10,000 cut-outs everyday.
                We use basic pen tool for cutting out images for your e-commerce website.
              </small>
            </div>
          </Col>
          <Col data-aos="fade-up" className="d-flex">
            <div className="service-icon mt-2 d-flex justify-content-center align-items-center rounded-circle me-3">
              <FontAwesomeIcon icon={faAlignCenter} size="2x" />
            </div>
            <div>
              <h5>CROPPING & ALIGN</h5>
              <small>
                This is one of the basic services we provide to save your time. We just need your instructions
                to crop your images and make it perfect for your website.
              </small>
            </div>
          </Col>
          <Col data-aos="fade-down" className="d-flex">
            <div className="service-icon mt-2 d-flex justify-content-center align-items-center rounded-circle me-3">
              <FontAwesomeIcon icon={faGear} size="2x" />
            </div>
            <div>
              <h5>GHOST MANNEQUIN</h5>
              <small>
                Since models are expensive and mannequins are distracting, we can assist you to get the best
                result with this service. We use multiple images and combine them to make the invisible
                mannequin look perfect.
              </small>
            </div>
          </Col>
          <Col data-aos="fade-right" className="d-flex">
            <div className="service-icon mt-2 d-flex justify-content-center align-items-center rounded-circle me-3">
              <FontAwesomeIcon icon={faGear} size="2x" />
            </div>
            <div>
              <h5>SHADOW</h5>
              <small>
                Putting shadow underneath a packshot adds depth. This includes reflection shadow, natural
                shadow and drop shadow. These shadows will make your product’s look better than ever.
              </small>
            </div>
          </Col>
          <Col data-aos="flip-left" className="d-flex">
            <div className="service-icon mt-2 d-flex justify-content-center align-items-center rounded-circle me-3">
              <FontAwesomeIcon icon={faSpinner} size="2x" />
            </div>
            <div>
              <h5>360 SPINS</h5>
              <small>
                Our 360 Spin service will make your product look more lively. We also provide resizing and
                alignment with this service. We also can add Shadow to make it even better.
              </small>
            </div>
          </Col>
          <Col data-aos="fade-left" className="d-flex">
            <div className="service-icon mt-2 d-flex justify-content-center align-items-center rounded-circle me-3">
              <FontAwesomeIcon icon={faCircleHalfStroke} size="2x" />
            </div>
            <div>
              <h5>COLOR ADJUST</h5>
              <small>
                Color adjustment will help you to get the actual color back and look even better. It also
                includes color changing; you can create several images out of one photo.
              </small>
            </div>
          </Col>
          <Col></Col>
          <Col data-aos="fade-up" className="d-flex">
            <div className="service-icon mt-2 d-flex justify-content-center align-items-center rounded-circle me-3">
              <FontAwesomeIcon icon={faHandPointer} size="2x" />
            </div>
            <div>
              <h5>RETOUCH</h5>
              <small>
                We know how to make beautiful images look even better. Image Retouching includes removing
                fabric wrinkles, model skin spot removing, product dust removing and so on. We also provide
                high-end model retouching for look-book and catalog use.
              </small>
            </div>
          </Col>
        </Row>
      </div>
      <hr />
    </section>
  );
};

export default Services;
