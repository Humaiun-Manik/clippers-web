import React from "react";
import { Breadcrumb } from "react-bootstrap";
import { useLocation } from "react-router-dom";

const SubMenu = () => {
  const location = useLocation();

  return (
    <>
      <div className="container mt-5 pt-5">
        <Breadcrumb className="mt-3 mb-4">
          <Breadcrumb.Item className="fs-4" href="/">
            HOME
          </Breadcrumb.Item>
          <Breadcrumb.Item className="text-black fs-5 text-uppercase mt-2" active>
            {location?.pathname?.slice(1)}
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <hr />
    </>
  );
};

export default SubMenu;
