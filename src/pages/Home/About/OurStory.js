import React from "react";
import { Col, Row } from "react-bootstrap";
import resources from "../../../assets/images/infra.jpg";
import csr from "../../../assets/images/CSR-1-500x200.png";
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
              <ul className="list-group mt-4">
                <li className="list-group-item border-0 pb-0">110+ Image Post Production Specialists</li>
                <li className="list-group-item border-0 pb-0">55+ Work Stations</li>
                <li className="list-group-item border-0 pb-0">Secure FTP Server</li>
                <li className="list-group-item border-0 pb-0">20 Mbps fiber optic connectivity</li>
                <li className="list-group-item border-0 pb-0">Minimum 3 months data backup</li>
                <li className="list-group-item border-0 pb-0">Premium DropBox for file transfer</li>
                <li className="list-group-item border-0 pb-0">24/7 Electricity backup</li>
              </ul>
            </Col>
            <Col data-aos="fade-left" className="d-flex justify-content-center">
              <img src={resources} alt="" />
            </Col>
          </Row>
        </div>
        <hr />
      </div>
      <div className=" mt-5 pt-4">
        <div className="container mb-5 pb-4">
          <div>
            <h1 className="text-center">CSR</h1>
            <p className="mb-2">Our CSR (Corporate Social Responsibility) Policies:</p>
          </div>
          <Row md={1} lg={2}>
            <Col data-aos="fade-right">
              <ul className="list-group">
                <li className="list-group-item border-0 p-0">– Weekly 5 day (40 hour) work</li>
                <li className="list-group-item border-0 p-0">
                  – Industry standard salary structure based on expertise
                </li>
                <li className="list-group-item border-0 p-0">– Yearly attractive salary increments</li>
                <li className="list-group-item border-0 p-0">
                  – Super friendly work environment with great atmosphere
                </li>
                <li className="list-group-item border-0 p-0">– Bright lightening work space</li>
                <li className="list-group-item border-0 p-0">– Comfortable work stations</li>
                <li className="list-group-item border-0 p-0">– All time tea and snacks</li>
                <li className="list-group-item border-0 p-0">– Yearly 2 festival bonuses</li>
                <li className="list-group-item border-0 p-0">– Public Holidays (Shift wise)</li>
                <li className="list-group-item border-0 p-0">
                  – Proper Maternity/Paternity Leave facilities
                </li>
              </ul>
            </Col>
            <Col data-aos="fade-left" className="d-flex justify-content-center">
              <img src={csr} alt="" />
            </Col>
          </Row>
        </div>
        <hr />
      </div>
    </section>
  );
};

export default OurStory;
