import React, { useState, useEffect } from "react";
import axios from "axios";
import { navigate, Link } from "@reach/router";

const RegistrationForm = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState([]);

  const craeteUser = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/createNewUser", {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
      })
      .then(() => navigate("/"))
      .catch((err) => {
        const errorResponse = err.response.data.errors; // Get the errors from err.response.data
        const errorArr = []; // Define a temp error array to push the messages in
        for (const key of Object.keys(errorResponse)) {
          // Loop through all errors and get the messages
          errorArr.push(errorResponse[key].message);
        }
        // Set Errors
        setErrors(errorArr);
      });
  };
  return (
    <div>
      <form className="reg-form" onSubmit={craeteUser}>
        <p>
          {errors.map((err, index) => (
            <small key={index} style={{ color: "red" }}>
              {err}
              <br />
            </small>
          ))}
        </p>
        <label for="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          onChange={(e) => setFirstName(e.target.value)}
        />
        <br />
        <label for="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          onChange={(e) => setLastName(e.target.value)}
        />
        <br />
        <label for="email">Email:</label>
        <input
          type="text"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <label for="password">Password:</label>
        <input
          type="text"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <label for="country">Country</label>
        <select id="country">
          <option>select one</option>
        </select>
        <br />
        <p>
          <Link to="/login">Press here if you have an account</Link>
        </p>
        <br />
        <button>Register</button>
      </form>
    </div>
  );
};
export default RegistrationForm;
