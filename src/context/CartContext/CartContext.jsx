import React, { createContext, useState } from 'react'

export const CartContext = createContext('');

const CartProvider = ({children}) => {
    const [itemCart, setItemCart] = useState([]);

    const addItem = (item) => {
        console.log(item.id)
        const index = itemCart.findIndex(i => i.id == item.id);
        if(index != -1){
            console.log("Existe")
            itemCart[index].quantity += item.quantity;
        }else{
            console.log("No existe")
            itemCart.push(item);
        }
        setItemCart(itemCart);
        console.log(itemCart);
    }
    const removeItem = (id) => {
        let index = itemCart.findIndex(i => i.id == id);
        if (index == -1) return;
        itemCart.splice(index, index == 0 ? index + 1 : index);
        setItemCart(itemCart);
    };
    const clear = () => setItemCart([]);
    //const isInCart = (id) => itemCart.includes(i => i.id==id);

    return (
        <CartContext.Provider value={{addItem,removeItem,clear}}>
                {children}
        </CartContext.Provider>
  )
}

export default CartProvider