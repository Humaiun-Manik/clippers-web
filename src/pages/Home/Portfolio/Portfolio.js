import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import img1 from "../../../assets/images/cut-out/a1-300x225.jpg";
import img2 from "../../../assets/images/cut-out/b1-300x225.jpg";
import img3 from "../../../assets/images/cut-out/c1-300x225.jpg";
import img4 from "../../../assets/images/cut-out/d1-300x225.jpg";
import img360 from "../../../assets/images/360/animated-image.gif";
import adjustment1 from "../../../assets/images/color-adjustment/CL-1-300x225.jpg";
import adjustment2 from "../../../assets/images/color-adjustment/color-a1-300x225.jpg";
import adjustment3 from "../../../assets/images/color-adjustment/R1-300x225.jpg";
import adjustment4 from "../../../assets/images/color-adjustment/R3-300x225.jpg";
import cropping from "../../../assets/images/cropping-align/crop-and-align-687x1024.jpg";
import shadow1 from "../../../assets/images/shadow/Shadow-1-1-300x225.jpg";
import shadow2 from "../../../assets/images/shadow/Shadow-3-300x225.jpg";
import shadow3 from "../../../assets/images/shadow/Shadow-5-300x225.jpg";
import shadow4 from "../../../assets/images/shadow/Shadow-a1-300x225.jpg";
import ghost1 from "../../../assets/images/ghost-mannequin/N1-300x225.jpg";
import ghost2 from "../../../assets/images/ghost-mannequin/N3-300x225.jpg";
import ghost3 from "../../../assets/images/ghost-mannequin/N5-300x225.jpg";
import ghost4 from "../../../assets/images/ghost-mannequin/N7-300x225.jpg";
import retouch1 from "../../../assets/images/retouch/1-a.jpeg";
import retouch2 from "../../../assets/images/retouch/2-a-300x300.jpeg";
import retouch3 from "../../../assets/images/retouch/3-b-300x300.jpeg";
import retouch4 from "../../../assets/images/retouch/4-a-300x300.jpeg";
import "aos/dist/aos.css";
import Aos from "aos";

const Portfolio = () => {
  useEffect(() => {
    Aos.init({ duration: "1000" });
  }, []);

  return (
    <section id="portfolio" className="container my-5 mb-5  pt-5">
      <h1 className="fw-bold pt-5">Portfolio</h1>
      <p className="fs-5 fw-light">
        Please send us some of your unedited images for a TRIAL to understand our quality better.
      </p>
      <Row xs={1} lg={2} className="mt-4">
        <Col data-aos="zoom-in" className="d-flex align-items-center">
          <div>
            <h1 className="fw-light">CUT OUT</h1>
            <p className="fw-bold my-2">Make beautiful images even better</p>
            <p>
              Cut-Out or Clipping Path is our most basic service. We process over 10,000 cut-outs everyday. We
              use basic pen tool for cutting out images for your e-commerce website.
            </p>
          </div>
        </Col>
        <Col data-aos="fade-left">
          <Row xs={1} lg={2}>
            <Col>
              <img src={img1} alt="" />
            </Col>
            <Col>
              <img src={img2} alt="" />
            </Col>
          </Row>
          <Row xs={1} lg={2}>
            <Col>
              <img src={img3} alt="" />
            </Col>
            <Col>
              <img src={img4} alt="" />
            </Col>
          </Row>
        </Col>
      </Row>
      <Row xs={1} lg={2}>
        <Col>
          <img className="w-50" src={img360} alt="" />
        </Col>
        <Col data-aos="zoom-in" className="d-flex align-items-center">
          <div>
            <h1 className="fw-light">360</h1>
            <p className="fw-bold my-2">Make beautiful images even better</p>
            <p>
              Our 360 Spin service will make your product look more lively. We also provide resizing and
              alignment with this service. We also can add Shadow to make it even better.
            </p>
          </div>
        </Col>
      </Row>
      <Row xs={1} lg={2} className="mt-4">
        <Col data-aos="zoom-in" className="d-flex align-items-center">
          <div>
            <h1 className="fw-light">COLOR ADJUSTMENT</h1>
            <p className="fw-bold my-2">Make beautiful images even better</p>
            <p>
              Color adjustment will help you to get the actual color back and look even better. It also
              includes color changing; you can create several images out of one photo.
            </p>
          </div>
        </Col>
        <Col data-aos="fade-left">
          <Row xs={1} lg={2}>
            <Col>
              <img src={adjustment3} alt="" />
            </Col>
            <Col>
              <img src={adjustment2} alt="" />
            </Col>
          </Row>
          <Row xs={1} lg={2}>
            <Col>
              <img src={adjustment1} alt="" />
            </Col>
            <Col>
              <img src={adjustment4} alt="" />
            </Col>
          </Row>
        </Col>
      </Row>
      <Row xs={1} lg={2}>
        <Col data-aos="fade-right">
          <img className="w-50" src={cropping} alt="" />
        </Col>
        <Col data-aos="zoom-in" className="d-flex align-items-center">
          <div>
            <h1 className="fw-light">CROPPING & ALIGN</h1>
            <p className="fw-bold my-2">Make beautiful images even better</p>
            <p>
              This is one of the basic services we provide to save your time. We just need your instructions
              to crop your images and make it perfect for your website.
            </p>
          </div>
        </Col>
      </Row>
      <Row xs={1} lg={2} className="mt-4">
        <Col data-aos="zoom-in" className="d-flex align-items-center">
          <div>
            <h1 className="fw-light">SHADOW</h1>
            <p className="fw-bold my-2">Make beautiful images even better</p>
            <p>
              Putting shadow underneath a packshot adds depth. This includes reflection shadow, natural shadow
              and drop shadow. These shadows will make your product’s look better than ever.
            </p>
          </div>
        </Col>
        <Col data-aos="fade-left">
          <Row xs={1} lg={2}>
            <Col>
              <img src={shadow1} alt="" />
            </Col>
            <Col>
              <img src={shadow2} alt="" />
            </Col>
          </Row>
          <Row xs={1} lg={2}>
            <Col>
              <img src={shadow3} alt="" />
            </Col>
            <Col>
              <img src={shadow4} alt="" />
            </Col>
          </Row>
        </Col>
      </Row>
      <Row xs={1} lg={2} className="mt-4">
        <Col data-aos="fade-right">
          <Row xs={1} lg={2}>
            <Col>
              <img src={ghost1} alt="" />
            </Col>
            <Col>
              <img src={ghost2} alt="" />
            </Col>
          </Row>
          <Row xs={1} lg={2}>
            <Col>
              <img src={ghost3} alt="" />
            </Col>
            <Col>
              <img src={ghost4} alt="" />
            </Col>
          </Row>
        </Col>
        <Col data-aos="zoom-in" className="d-flex align-items-center">
          <div>
            <h1 className="fw-light">GHOST MANNEQUIN</h1>
            <p className="fw-bold my-2">Make beautiful images even better</p>
            <p>
              Since models are expensive and mannequins are distracting, we can assist you to get the best
              result with this service. We use multiple images and combine them to make the invisible
              mannequin look perfect.
            </p>
          </div>
        </Col>
      </Row>
      <Row xs={1} lg={2} className="mt-4">
        <Col data-aos="zoom-in" className="d-flex align-items-center">
          <div>
            <h1 className="fw-light">RETOUCH</h1>
            <p className="fw-bold my-2">Make beautiful images even better</p>
            <p>
              We know how to make beautiful images look even better. Image Retouching includes removing fabric
              wrinkles, model skin spot removing, product dust removing and so on. We also provide high-end
              model retouching for look-book and catalog use.
            </p>
          </div>
        </Col>
        <Col data-aos="fade-left">
          <Row xs={1} lg={2}>
            <Col>
              <img src={retouch1} alt="" />
            </Col>
            <Col>
              <img src={retouch3} alt="" />
            </Col>
          </Row>
          <Row xs={1} lg={2}>
            <Col>
              <img src={retouch2} alt="" />
            </Col>
            <Col>
              <img src={retouch4} alt="" />
            </Col>
          </Row>
        </Col>
      </Row>
    </section>
  );
};

export default Portfolio;
