import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import Menubar from "../pages/Shared/Menubar/Menubar";

const Main = () => {
  return (
    <>
      <Menubar></Menubar>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
};

export default Main;
