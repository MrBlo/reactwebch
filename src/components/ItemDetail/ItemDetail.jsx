//rafce
import React, { useContext, useState } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext/CartContext";
import ItemCount from "../ItemCount/ItemCount";
import Swal from "sweetalert2";
import "./ItemDetail.css";

const ItemDetail = ({
  id,
  title,
  price,
  image,
  detail,
  category,
  categoryId,
  stock,
}) => {
  const [count, setCount] = useState(0);
  const [showCount, setShowCount] = useState(true);
  const { addItem, getCount } = useContext(CartContext);

  const onAdd = () => {
    if (count == 0 || getCount(id) + count > stock) {
      Swal.fire({
        title: "Oops...",
        text: "No hay stock suficiente(revise su carro)",
        icon: "error",
      });
      return;
    }
    addItem({ title, image, detail, id, price, quantity: count });
    setShowCount(false);
  };

  return (
    <Container className={"pt-5 mt-5"}>
      <Row>
        <Col lg={6}>
          <Image
            className="ItemDetail__image w-100 px-3"
            src={image}
            fluid={true}
          />
        </Col>
        <Col lg={6}>
          <h1>{title}</h1>
          <h2>${price}</h2>
          <p>{category}</p>
          <p>{`STOCK: ${stock}`}</p>
          <div className="ItemDetail__description">
            <p>{detail}</p>
          </div>
          {showCount ? (
            <ItemCount
              count={count}
              setCount={setCount}
              stock={stock}
              onAdd={onAdd}
            />
          ) : (
            <Link className="ItemDetail__link" to="/cart">
              {count} Items agregado <br /> Terminar mi compra{" "}
            </Link>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default ItemDetail;
