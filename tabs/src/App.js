import React, { useState } from 'react';
import './App.css';
import Tab from './components/Tab';
import Content from './components/Content';


function App() {
  const [selected, setSelected] = useState("");

  const render = ( tab ) => {
    setSelected( tab );
};
  return (
    <div className="App">
      <Tab currentTab={render}/>
      <Content currentTab={selected}></Content>
    </div>
  );
}

export default App;
