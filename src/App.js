import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

const bodyStyle={
  fontFamily: 'DM Sans, sans-serif',
}

function App() {
  return (
    <div className="App" style={bodyStyle}>
      <NavBar />
      <ItemListContainer/>
    </div>
  );
}

export default App;
