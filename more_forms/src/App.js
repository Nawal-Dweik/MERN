import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
// import Results from './components/Results';

function App() {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmation: ""

  });

  return (
    <div className="App">
     <Form inputs={state} setInputs={setState}/>
     {/* <Results data={state}/> */}
    </div>
  );
}

export default App;
