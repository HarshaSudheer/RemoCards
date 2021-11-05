import "./LoginPage.css";
import React from "react";

function LoginPage(){


    return(
        <div className="background">
            <div className="heading">
            Remo Cards 
        </div>
        <div className="menuPanel">
        <input type="text" placeholder="Enter your name" className="nameField"></input>
        <button className="buttonStyle" >Enter</button>
        </div>
        </div>
    )
}

export default LoginPage;