import React from "react";
import { Accordion, Col, Row } from "react-bootstrap";
import about from "../../../assets/images/CW.png";

const AboutUs = () => {
  return (
    <section className="container my-5 pt-5">
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
                  We are team of 180+ image post production specialists who work 24/7 in 3 shifts. So when our
                  clients have an overflow of work, we will be there to assist them anytime.
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
                  Our client support team is available all the time for an immediate response on your queries.
                  Please send an email to info@clippersweb.com for any queries.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </Col>
        <Col data-aos="fade-left" className="d-flex justify-content-center align-items-center">
          <img className="img-fluid" src={about} alt="" />
        </Col>
      </Row>
    </section>
  );
};

export default AboutUs;
