import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Accordion, Col, Row } from "react-bootstrap";
import about from "../../../assets/images/CW.png";
import user1 from "../../../assets/images/clients/user-11.jpg";
import user2 from "../../../assets/images/clients/user-21.jpg";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

const AboutUs = () => {
  return (
    <section id="about">
      <div className="container my-5 pt-5">
        <h1 className="fw-bold my-5">
          About <span className="fw-light">us</span>
        </h1>
        <Row xs={1} lg={2}>
          <Col data-aos="fade-right">
            <h5>What we do?</h5>
            <p>We edit, retouch, optimize your images and make them ready for e-commerce use.</p>
            <div>
              <h5 className="mt-5">Why Clippers Web is the best choice for you?</h5>
              <Accordion>
                <Accordion.Item eventKey="0" className="border-0">
                  <Accordion.Header>We work as an extension of your in-house team</Accordion.Header>
                  <Accordion.Body>
                    We are team of 180+ image post production specialists who work 24/7 in 3 shifts. So when
                    our clients have an overflow of work, we will be there to assist them anytime.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1" className="border-0">
                  <Accordion.Header>We work based on European and North American time zones</Accordion.Header>
                  <Accordion.Body>
                    Our office hours and shifts are based on European/North American time zones. That how our
                    clients get instant response from us during their office hours.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2" className="border-0">
                  <Accordion.Header>We are open 24/7</Accordion.Header>
                  <Accordion.Body>
                    We have special several shifts everyday including Sundays. We are also open on all the
                    European bank holidays including Christmas or New Year.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3" className="border-0">
                  <Accordion.Header>We dedicate a separate team if you have regular jobs</Accordion.Header>
                  <Accordion.Body>
                    We always give all our clients enough priority so that they feel like they have their own
                    team who dedicatedly works only for them when needed. If you have a regular work flow,
                    please contact us now for a separate team.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4" className="border-0">
                  <Accordion.Header>We are responsive and best in communication</Accordion.Header>
                  <Accordion.Body>
                    Our client support team is available all the time for an immediate response on your
                    queries. Please send an email to info@clippersweb.com for any queries.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </Col>
          <Col data-aos="fade-left" className="d-flex justify-content-center align-items-center">
            <img className="img-fluid" src={about} alt="" />
          </Col>
        </Row>
      </div>
      <div style={{ backgroundColor: "#789bbf" }}>
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
      </div>
    </section>
  );
};

export default AboutUs;
