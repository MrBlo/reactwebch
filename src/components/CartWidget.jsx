import React from 'react';

function CartWidget({value}){
    return (
        <div style={{position: "relative"}}>
            <img src="./assets/img/cart.png" style={{width: "32px"}} alt="Cart"/>
            <p style={{position: "absolute",display: "inline-block",margin:"0",bottom:"0",right:"0",height:"12px",width:"4px"}}>{value}</p>
        </div>
    );
}

export default CartWidget;