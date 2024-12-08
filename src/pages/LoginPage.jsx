import React from "react";
import Login from "../components/Login";

const LoginPage = () => {
    return (
        <div className="login-page">
          <div className="left-side">
            <img src="public/form image.png" alt="intro" />
          </div>
          <div className="right-side">
            <Login />
          </div>
        </div>
      );
    };
    
    export default LoginPage;
