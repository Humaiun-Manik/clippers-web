import React from "react";
import { Accordion, Col, Row } from "react-bootstrap";
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
      <div id="our-story" data-aos="zoom-out" className="container mb-5 py-5">
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
      <div id="resources" className=" mt-5 pt-5">
        <div className="container mt-4">
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
      <div id="csr" className=" mt-5 pt-5">
        <div className="container mb-5 pb-4">
          <div>
            <h1 className="text-center py-5">CSR</h1>
          </div>
          <Row md={1} lg={2}>
            <Col data-aos="fade-right">
              <p className="mb-2">Our CSR (Corporate Social Responsibility) Policies:</p>
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
      <div id="faq" className="container mb-5">
        <Row xs={1} lg={2}>
          <Col data-aos="zoom-in">
            <h1 className="my-5">
              <span className="fw-light">Frequently</span> asked questions
            </h1>
            <Accordion>
              <Accordion.Item eventKey="0" className="border-0">
                <Accordion.Header>Who are you and how long have you been in business?</Accordion.Header>
                <Accordion.Body>
                  We are Clippers Web. We are a Bangladesh based Image Post Production company founded by two
                  entrepenuers in April 2012.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1" className="border-0">
                <Accordion.Header>Where are you located?</Accordion.Header>
                <Accordion.Body>We are located in the capital of Bangladesh.</Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2" className="border-0">
                <Accordion.Header>What categories of product images do you edit?</Accordion.Header>
                <Accordion.Body>
                  We edit all types of images: apparel, models, accessories, jewelry, furnitures, home goods,
                  automotive, fashion, advertising and so on.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3" className="border-0">
                <Accordion.Header>What's your basic price?</Accordion.Header>
                <Accordion.Body>
                  For simple clipping path (bags, shoes, accessories), we charge as low as $0.35 per image.
                  Please send us an example and your work volume to get the best quotation from us.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4" className="border-0">
                <Accordion.Header>How does the free evaluation test work?</Accordion.Header>
                <Accordion.Body>
                  You can send an example image from each of your product category with intructions via email
                  or using our TRIAL. We will deliver the free trial with quotation within 24 hours.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="5" className="border-0">
                <Accordion.Header>Do you provide any security for my images?</Accordion.Header>
                <Accordion.Body>
                  Yes, of course. We provide a non-disclosure agreement if necessary. However, all images will
                  be treated confidentially and will be permanently deleted after 30 days as per your
                  requirements. The images will never be shared or used for any purpose outside the company.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="6" className="border-0">
                <Accordion.Header>How and when to pay for your services?</Accordion.Header>
                <Accordion.Body>
                  We send an invoice on a monthly or bi-weekly basis upon agreement. We accept payment via
                  PayPal and Bank Wire Transfers.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="7" className="border-0">
                <Accordion.Header>Can I talk to someone?</Accordion.Header>
                <Accordion.Body>
                  Sure, you can add us up on our Skype (ID: clippersweb) or send us an email and we will be
                  right back to you.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
          <Col></Col>
        </Row>
      </div>
    </section>
  );
};

export default OurStory;
