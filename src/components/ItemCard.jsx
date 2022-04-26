import React from "react";
import ItemCount from "./ItemCount";

const ItemCardStyle={
    width: '300px',
    height: '450px',
    borderRadius: '10px',
    padding: '10px',
    border: '6px solid #29274a',
    color: '#f9fcfe',
    backgroundColor: '#3c3978',
};

const h3Style={
    fontSize: '23px',
}

const imgStyle={
    width: '180px',
    height: '180px',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
}

const pStyle={
    fontSize: '19px',
}

const buttonStyle={
    backgroundColor: '#2a2a4c',
    outline: 'none',
    cursor: 'pointer',
    border: 'none',
    marginLeft: '16%',
    borderRadius: '5px',
    color: 'white',
    height: '40px',
    width: '66%',
    marginTop: '5px',
    fontSize: '20px',
}

function ItemCard({title,image,price}){
    return (<div style={ItemCardStyle}>
        <h3 style={h3Style}>{title}</h3>
        <p style={pStyle}>${price}</p>
        <img style={imgStyle} src={`./assets/img/${image}`} alt="" />
        <ItemCount/>
        <button style={buttonStyle}>Agregar al Carrito</button>
    </div>);
}

export default ItemCard;