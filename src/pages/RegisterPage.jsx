import React from "react";
import Register from "../components/Register";

const RegisterPage = () => {
    return (
        <div className="register-page">
          <div className="left-side">
            <img src="src/assets/form image.png" alt="intro" />
          </div>
          <div className="right-side">
            <Register />
          </div>
        </div>
      );
    };
    
    export default RegisterPage;