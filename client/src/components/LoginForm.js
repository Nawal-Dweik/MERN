import React, {useState, useEffect} from "react";
const LoginForm = props => {
    return(
        <div>
        <form className="login-form">
         <label for="email">Email:</label>
           <input id="email"/>
           <br/>
           <label for="password">Password:</label>
           <input id="password"/>
           <br/>
           <input type="submit" value="Login"/>
           </form>
        </div>
    )
}
export default LoginForm;