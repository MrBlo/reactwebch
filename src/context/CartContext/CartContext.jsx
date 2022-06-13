import React, { createContext, useState } from "react";

export const CartContext = createContext("");

const CartProvider = ({ children }) => {
  const [itemCart, setItemCart] = useState([]);
  const [countItems, setCountItems] = useState(0);

  const addItem = (item) => {
    const itemCartClone = [...itemCart];
    const index = itemCartClone.findIndex((i) => i.id == item.id);
    if (index != -1) {
      itemCartClone[index].quantity += item.quantity;
    } else {
      itemCartClone.push(item);
    }
    setItemCart(itemCartClone);
    getTotalItems(itemCartClone);
  };

  const getCount = (id) => {
    const index = itemCart.findIndex((i) => i.id == id);
    if (index == -1) {
      return 0;
    } else {
      return itemCart[index].quantity;
    }
  };

  const getTotalPrice = () => {
    return itemCart.reduce(
      (previusValue, currentValue) =>
        previusValue + currentValue.quantity * currentValue.price,
      0
    );
  };
  const getTotalItems = (itemClone) => {
    setCountItems(
      itemClone.reduce(
        (previusValue, currentValue) =>
          previusValue + (currentValue.quantity || 0),
        0
      )
    );
  };
  const removeItem = (id) => {
    let index = itemCart.findIndex((i) => i.id == id);
    if (index == -1) return;
    const itemClone = [...itemCart];
    itemClone.splice(index, index == 0 ? index + 1 : index);
    setItemCart(itemClone);
    getTotalItems(itemClone);
  };

  const clear = () => {
    setCountItems(0);
    setItemCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        itemCart,
        addItem,
        removeItem,
        clear,
        getTotalPrice,
        countItems,
        getCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
