import React from 'react';
import CartProvider from './context/CartContext/CartContext';
import Rutas from './routes/Rutas';

function App() {
  return (
    <div className="App">
    <CartProvider>
      <Rutas/>
    </CartProvider></div>
  );
}

export default App;

/*

    <div className="App" style={bodyStyle}>
      <NavBar />
      <ItemListContainer/>
    </div>
    
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
*/