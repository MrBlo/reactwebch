import React from 'react';
import ItemCard from './ItemCard';

function ItemListContainer(props) {
  return (
    <div>
      <h1>Listado de productos</h1>
      <ItemCard title="Bicicleta Fenix Aro 29" image="fenixaro29.jpg" price="109.990"/>
    </div>
  );
}

export default ItemListContainer;
