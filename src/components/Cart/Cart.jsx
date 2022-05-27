import React, { useContext, useEffect } from 'react'
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {CartContext} from "../../context/CartContext/CartContext";
import FormComponent from '../Form/FormComponent';

const Cart = () => {
  const {itemCart} = useContext(CartContext);
  const {getTotalPrice} =  useContext(CartContext);
  const {removeItem} =  useContext(CartContext);

  useEffect(() => {
  }, [itemCart])
  

  return getTotalPrice() != 0 ? (
    <div className='px-5 mx-5'>
      <ul>
      {itemCart.map((e, index) => {
          return <li key={index}>
            <Image className="w-25" src={e.image} fluid={true} />
            <div className='d-inline-block mx-5'>
              {e.title}<br/>
              {e.price}
            </div>
            <p className='d-inline-block'>Cantidad: {e.quantity}</p>
            <button onClick={() => {removeItem(e.id)}}>Eliminar item</button>
          </li>
        })}
      </ul>
      <h3 className='text-end'>Total: {getTotalPrice()}</h3>
      <FormComponent total={getTotalPrice()} compra={itemCart} />
    </div>
    
  )
  :
  <h2 className='text-center'>Carrito vacio, prueba agregando algo a tu carrito<br/><Link to="/">Ver productos</Link></h2>
}

export default Cart