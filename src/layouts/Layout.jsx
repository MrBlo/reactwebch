import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar/NavBar";

const LayOut = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <div className="text-center mt-5 pt-5">
        <p>
          Pablo Arias
          <br />
          para coderhouse
        </p>
      </div>
    </>
  );
};

export default LayOut;

//<Footer/>
