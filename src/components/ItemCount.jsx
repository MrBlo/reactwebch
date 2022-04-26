import React, { useState } from "react";

const divStyle={
    marginTop: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
    //border: '2px solid #74739d',
    borderRadius: '5px',
    width: '80%',
    marginLeft: 'auto',
    marginRight: 'auto',
    //backgroundColor: '#a19ec7',
    height: '50px',
    marginTop: '30px',
}


const buttonStyle = {
    height: '30px',
    width: '30px',
    backgroundColor: '#2f305c',
    outline: 'none',
    cursor: 'pointer',
    border: 'none',
    borderRadius: '15px',
    color: 'whiteSmoke',
    fontSize: '30px',
    fontWeight: 'bolder',
    lineHeight: '0px',
    padding: '0',
    display: 'table-cell',
    verticalAlign: 'middle',
};

const countStyle = {
    fontSize: '20px',
    marginBottom: '0',
    width: '22px',
}

function ItemCount(){
    const [count,setCount] = useState(0);
    return (
        <div style={divStyle}>
            <button style={buttonStyle} onClick={() => setCount(count-1)}>-</button>
            <p style={countStyle}>{count}</p>
            <button style={buttonStyle} onClick={() => setCount(count+1)}>+</button>
        </div>
    );
}

export default ItemCount;