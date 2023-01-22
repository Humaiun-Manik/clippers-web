import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Footer.css";
import "aos/dist/aos.css";
import Aos from "aos";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    Aos.init({ duration: "1000" });
  }, []);

  return (
    <footer style={{ backgroundColor: "#1A1E23" }}>
      <div className="container py-5">
        <Row xs={1} lg={2} className="text-secondary">
          <Col data-aos="fade-down">
            <ul className="d-flex list-unstyled footer-menu">
              <li className="me-4">
                <Link to="/portfolio">Portfolio</Link>
              </li>
              <li className="me-4">
                <Link to="/about">About</Link>
              </li>
              <li className="me-4">
                <Link to="/trial">Trial</Link>
              </li>
              <li className="me-4">
                <Link to="/terms-conditions">Terms & Conditions</Link>
              </li>
            </ul>
            <p>&#169; Copyright {currentYear} Clippers Web All Right Reserved</p>
          </Col>
          <Col data-aos="fade-down" className="d-flex justify-content-center">
            <div>
              <p className="m-0">Clippers Web</p>
              <p className="m-0">Dhaka, Bangladesh</p>
              <p className="m-0">Phone: +88 0 1992223111</p>
            </div>
          </Col>
        </Row>
      </div>
    </footer>
  );
};

export default Footer;
