import React from 'react';
import CartProvider from './context/CartContext/CartContext';
import Rutas from './routes/Rutas';

function App() {
  return (
    <div className="App">
      <CartProvider>
        <Rutas />
      </CartProvider></div>
  );
}

export default App;