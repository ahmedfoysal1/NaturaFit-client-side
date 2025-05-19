import React from "react";
import { Outlet } from "react-router-dom";
import Navbarr from "../Pages/Navbar/Navbarr";
import { Toaster } from "react-hot-toast";

const Main = () => {
  return (
    <div>
      <Navbarr></Navbarr>
      <Outlet></Outlet>
      <Toaster></Toaster>
    </div>
  );
};

export default Main;
