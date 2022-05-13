import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import LayOut from "../layouts/Layout";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer";
import Cart from "../components/Cart/Cart";

const Rutas = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<LayOut />}>
          <Route index element={<ItemListContainer />} />
          <Route path="/category/:id" element={<ItemListContainer/>}/>
          <Route path="/item/:id" element={<ItemDetailContainer/>}/>
          <Route path="/cart" element={<Cart/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Rutas;

/*


          <Route path="/card" element={<Card />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/item-detail/:id" element={<ItemDetail />} />
          <Route path="*" element={<Error />} />


*/