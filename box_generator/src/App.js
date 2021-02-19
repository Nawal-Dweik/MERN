import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import ColorForm from './components/colorForm';
import Box from './components/box';

function App() {
  const [currentColor, setCurrentColor] = useState([]);
  const addColor = ( addedColor ) => {
    setCurrentColor( currentColor.concat(addedColor) );
};

  return (
    <div>
     <ColorForm boxColor = {addColor} />
     <Box color= {currentColor} /> 
    </div>
  );
};

export default App;
