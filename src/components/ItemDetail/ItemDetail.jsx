//rafce
import React, { useState } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";

const ItemDetail = ({ id, title, price, image, extendedDetail,category,stock }) => {
  const [count, setCount] = useState(0);
  const [showCount, setShowCount] = useState(true);
  const onAdd = () =>{
    console.log("Changed")
    setShowCount(false)
  };

  if(!id) return <h1>Cargando</h1>
  return (
    <Container className={"pt-5 mt-5"}>
      <Row>
        <Col lg={6}>
          <Image className="w-75" src={`../assets/img/${image}`} fluid={true} />
        </Col>
        <Col lg={6}>

          <h1>{title}</h1>
          <h2>${price}</h2>
          <p>{category}</p>
          <p>{`STOCK: ${stock}`}</p>
          <p>
            {extendedDetail}
          </p>
          {showCount ? <ItemCount count={count} setCount={setCount} stock={stock} onAdd={onAdd}/>
          : <Link className="ItemDetail__link" to="/cart">{count} Items agregado <br/> Terminar mi compra </Link>}
        </Col>
      </Row>
    </Container>
  );
};

export default ItemDetail;
