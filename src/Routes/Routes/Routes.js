import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AboutUs from "../../pages/Home/About/AboutUs";
import Home from "../../pages/Home/Home/Home";
import Portfolio from "../../pages/Home/Portfolio/Portfolio";
import TermsConditions from "../../pages/TermsConditions/TermsConditions";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "portfolio",
        element: <Portfolio></Portfolio>,
      },
      {
        path: "about",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "terms-conditions",
        element: <TermsConditions></TermsConditions>,
      },
    ],
  },
]);
