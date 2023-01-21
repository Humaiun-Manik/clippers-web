import React from "react";
import { Col, Row } from "react-bootstrap";
import resources from "../../../assets/images/infra.jpg";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Aos from "aos";

const OurStory = () => {
  useEffect(() => {
    Aos.init({ duration: "1000" });
  }, []);

  return (
    <section>
      <div data-aos="zoom-out" className="container mb-5 py-5">
        <h1 className="fw-bold my-5 text-center">
          <span className="fw-light">Our</span> Story
        </h1>
        <p>
          ClippersWeb was founded in 2012 with a vision of empowering 1000+ graphic designers. Starting with a
          team of 12 photoshop experts initially, the team now consists of 190 in-house staff and designers.
          We are now serving over 120+ onlines and fashion companies all over the world.
        </p>
      </div>
      <hr />
      <div className=" mt-5 pt-4">
        <div className="container">
          <h1>Company Infrastructure & Resources</h1>
          <Row md={1} lg={2}>
            <Col data-aos="fade-right">
              <ul class="list-group mt-4">
                <li class="list-group-item border-0 pb-0">110+ Image Post Production Specialists</li>
                <li class="list-group-item border-0 pb-0">55+ Work Stations</li>
                <li class="list-group-item border-0 pb-0">Secure FTP Server</li>
                <li class="list-group-item border-0 pb-0">20 Mbps fiber optic connectivity</li>
                <li class="list-group-item border-0 pb-0">Minimum 3 months data backup</li>
                <li class="list-group-item border-0 pb-0">Premium DropBox for file transfer</li>
                <li class="list-group-item border-0 pb-0">24/7 Electricity backup</li>
              </ul>
            </Col>
            <Col data-aos="fade-left" className="d-flex justify-content-center">
              <img src={resources} alt="" />
            </Col>
          </Row>
        </div>
        <hr />
      </div>
    </section>
  );
};

export default OurStory;
