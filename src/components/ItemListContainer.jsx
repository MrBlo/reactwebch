import React from 'react';

function ItemListContainer(props) {
  return (
    <div>
      <h1>Listado de productos</h1>
      <p>{props.text}</p>
    </div>
  );
}

export default ItemListContainer;
