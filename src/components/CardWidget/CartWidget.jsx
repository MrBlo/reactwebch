import React from 'react';
import './CartWidget.css';

function CartWidget({value}){
    return (
        <div className="CartWidget">
            <img className="CartWidget__image" src="/assets/img/cart.png" alt="Cart"/>
            <p className="CartWidget__counter">{value}</p>
        </div>
    );
}

export default CartWidget;