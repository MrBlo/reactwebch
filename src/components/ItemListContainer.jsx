import React from 'react';
import ItemCard from './ItemCard';

function ItemListContainer(props) {
  return (
    <div>
      <h1>Listado de productos</h1>
      <ItemCard title="Bicicleta Fenix Aro 29" image="fenixaro29.jpg" price="109.990" initial="1" stock="3" onAdd={(n) => console.log(`Cantidad a agregar ${n}`)}/>
    </div>
  );
}

export default ItemListContainer;
