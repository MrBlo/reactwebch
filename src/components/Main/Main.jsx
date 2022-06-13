import React from "react";
import ItemListContainer from "../ItemListContainer/ItemListContainer";
import "./main.css";

const Main = () => {
  return (
    <>
      <div className="main">
        <div className="main-inside d-flex flex-column justify-content-around">
          <div className="ms-5 ps-5">
            <h1>Automotora eCommerce</h1>
            <h4 className="fst-italic ps-5">Vehiculos y más</h4>
          </div>
          <div className="mt-5 text-center">
            <h4 className="">Nuestro listado de productos</h4>
          </div>
        </div>
      </div>
      <ItemListContainer />
    </>
  );
};

export default Main;
