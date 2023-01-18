import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../pages/Home/Shared/Footer/Footer";
import Menubar from "../pages/Home/Shared/Menubar/Menubar";

const Main = () => {
  return (
    <div>
      <Menubar></Menubar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
