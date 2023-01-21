import React from "react";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Portfolio from "../Portfolio/Portfolio";
import Services from "../Services/Services";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <Services></Services>
      <Portfolio></Portfolio>
      <About></About>
    </>
  );
};

export default Home;
