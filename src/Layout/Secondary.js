import React from "react";
import { Outlet } from "react-router-dom";
import SubMenu from "../pages/Shared/SubMenu/SubMenu";

const Secondary = () => {
  return (
    <>
      <SubMenu></SubMenu>
      <Outlet></Outlet>
    </>
  );
};

export default Secondary;
