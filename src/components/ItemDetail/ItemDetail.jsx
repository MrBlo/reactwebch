//rafce
import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

const ItemDetail = ({ id, title, price, image, extendedDetail,category,stock }) => {
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
        </Col>
      </Row>
    </Container>
  );
};

export default ItemDetail;
