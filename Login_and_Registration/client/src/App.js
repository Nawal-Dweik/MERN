import logo from "./logo.svg";
import "./App.css";
import { Router } from "@reach/router";
import RegistrationForm from "./components/RegistrationForm";
import LoginForm from "./components/LoginForm";

function App() {
  return (
    <div className="App">
      <Router>
        <RegistrationForm path="/" />
        <LoginForm path="/login" />
      </Router>
    </div>
  );
}

export default App;
