import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import user1 from "../../../assets/images/clients/user-11.jpg";
import user2 from "../../../assets/images/clients/user-21.jpg";
import "aos/dist/aos.css";
import Aos from "aos";

const ClientsSay = () => {
  useEffect(() => {
    Aos.init({ duration: "1000" });
  }, []);

  return (
    <section style={{ backgroundColor: "#789bbf" }}>
      <div className="container py-5 text-white">
        <h1 className="py-4 mb-3 fw-normal">What our clients say about us!</h1>
        <Row md={1} lg={2} className="g-5">
          <Col data-aos="fade-right">
            <div className="p-4 rounded-3 border-bottom" style={{ backgroundColor: "#7f9dbc" }}>
              <p className="fst-italic fs-5 fw-normal mb-0">
                "ClippersWeb helped us a lot to improve our existing online product images. I really
                appreciate their effort."
              </p>
            </div>
            <FontAwesomeIcon className="ms-5" style={{ marginTop: "-19px" }} icon={faCaretDown} size="3x" />
            <div className="d-flex align-items-center">
              <img className="rounded-circle me-4" src={user1} alt="" />
              <h6 className="text-black">an E-Commerce Manager from Denmark</h6>
            </div>
          </Col>
          <Col data-aos="fade-left">
            <div className="p-4 rounded-3 border-bottom" style={{ backgroundColor: "#7f9dbc" }}>
              <p className="fst-italic fs-5 fw-normal mb-0">
                "ClippersWeb works just like our in-house studio. They are responsive, fast and skilled."
              </p>
            </div>
            <FontAwesomeIcon className="ms-5" style={{ marginTop: "-19px" }} icon={faCaretDown} size="3x" />
            <div className="d-flex align-items-center">
              <img className="rounded-circle me-4" src={user2} alt="" />
              <h6 className="text-black">CEO of a men's online store</h6>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default ClientsSay;
