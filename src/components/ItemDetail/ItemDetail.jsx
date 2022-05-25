//rafce
import React, { useContext, useState } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import {CartContext} from "../../context/CartContext/CartContext";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";

/*
title: "Bicicleta Aro 29",
        image: "fenixaro29.jpg",
        detail: "Bicicleta MTB, perfecta para salidas a la montaña",
        id: 1,
        categoryId: 1,
        price: 22000,
*/

const ItemDetail = ({ id, title, price, image, detail ,category,categoryId,stock }) => {
  const [count, setCount] = useState(0);
  const [showCount, setShowCount] = useState(true);
  const {addItem} = useContext(CartContext);
  const onAdd = () =>{
    addItem({title,image,detail,id,categoryId,price,"quantity":count});
    setShowCount(false);
  };
  //<Image className="w-75" src={`../assets/img/${image}`} fluid={true} />
  if(!id) return <h1>Cargando</h1>
  return (
    <Container className={"pt-5 mt-5"}>
      <Row>
        <Col lg={6}>
          <Image className="w-75" src={image} fluid={true} />
        </Col>
        <Col lg={6}>

          <h1>{title}</h1>
          <h2>${price}</h2>
          <p>{category}</p>
          <p>{`STOCK: ${stock}`}</p>
          <p>
            {detail}
          </p>
          {showCount ? <ItemCount count={count} setCount={setCount} stock={stock} onAdd={onAdd}/>
          : <Link className="ItemDetail__link" to="/cart">{count} Items agregado <br/> Terminar mi compra </Link>}
        </Col>
      </Row>
    </Container>
  );
};

export default ItemDetail;
