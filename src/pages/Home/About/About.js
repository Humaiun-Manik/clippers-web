import React from "react";
import { useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";
import AboutUs from "./AboutUs";
import ClientsSay from "./ClientsSay";
import OurStory from "./OurStory";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: "1000" });
  }, []);

  return (
    <>
      <AboutUs></AboutUs>
      <ClientsSay></ClientsSay>
      <OurStory></OurStory>
    </>
  );
};

export default About;
