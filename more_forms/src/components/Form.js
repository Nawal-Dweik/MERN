import React,{ useState } from "react";

const Form = (props) => {
    const [firstName, setFirstName] = useState("");
    const [firstNameError, setFirstNameError] = useState("First Name should be at least 2 characters");

    const [lastName, setLastName] = useState("");
    const [lastNameError, setLastNameError] = useState("Last Name must be at least 2 characters");

    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("Email must be at least 2 characters");

    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("Password must be at least 8 characters");

    const [confirmation, setConfirmation] = useState("");
    const [confirmationError, setConfirmationError] = useState("Passwords must match");


//first name validation
const firstNameHandler = (e) => {
    setFirstName(e.target.value);
    if(e.target.value.length < 2){
setFirstNameError("First Name should be at least 2 characters");
    }
    if(e.target.value.length >= 2){
        setFirstNameError("");
      
            }
}

//last name validation
const lastNameHandler = (e) => {
    setLastName(e.target.value);
    if(e.target.value.length < 2){
setLastNameError("Last Name should be at least 2 characters");
    }

    if(e.target.value.length >= 2){
        setLastNameError("");
      
            }
}

//email validation
const emailHandler = (e) => {
    setEmail(e.target.value);
    if(e.target.value.length < 2){
    setEmailError("Email should be at least 2 characters");
    }

    if(e.target.value.length >= 2){
    setEmailError("");
      }
}

//password validation
const passwordHandler = (e) => {
    setPassword(e.target.value);
    if(e.target.value.length < 8){
    setPasswordError("Password should be at least 8 characters");
    }

    if(e.target.value.length >= 8){
    setPasswordError("");
      }
}

//password confirmation validation
const passwordConfirmHandler = (e) => {
    setConfirmation(e.target.value);
    if(e.target.value != password){
    setConfirmationError("Passwords must match");
    }

    if(e.target.value == password){
    setConfirmationError("");
      }
}

    return(
        <form >
            <div className="form-element">
            <label htmlFor="firstName">First Name</label>
            <input onChange={ firstNameHandler } type="text" name="firstName"></input>
            </div>
            {firstNameError ? <p>{firstNameError}</p> : '' }
            <br/>
            <div className="form-element">
            <label htmlFor="lastName">Last Name</label>
            <input onChange={ lastNameHandler } type="text" name="lastName"></input>
            </div>
            {lastNameError ? <p>{lastNameError}</p> : '' }
            <br/>
            <div className="form-element">
            <label htmlFor="email">Email</label>
            <input onChange={ emailHandler } type="text" name="email"></input>
            </div>
            {emailError ? <p>{emailError}</p> : '' }
            <br/>
            <div className="form-element">
            <label htmlFor="password">Password</label>
            <input onChange={ passwordHandler } type="password" name="password"></input>
</div>
            {passwordError ? <p>{passwordError}</p> : '' }
            <br/>
            <div className="form-element">
            <label htmlFor="confirmPassword">Confirm</label>
            <input onChange={ passwordConfirmHandler } type="password" name="confirmPassword"></input>
            </div>
            {confirmationError ? <p>{confirmationError}</p> : '' }
        </form>
    );
    }

export default Form;