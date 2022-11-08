import "./input.css"
import { Link } from "react-router-dom";
import Form from "./form/form";
import { useEffect, useState } from "react";
import React from "react";

const InputContext= React.createContext();

function Input(){
   
    const[userData, setUserData]=useState({
        name: "",
        surname: "",
        gender: ""
    });
    useEffect(()=>{
        console.log(userData);
    }
    ,[userData])
    return(
        <div>
            <h1 className="input">input</h1>
            <InputContext.Provider value={{userData,setUserData}}><Form></Form></InputContext.Provider>
            <Link to={"/"} className="inputHome">Home</Link>
        </div>
    );
}

export {Input, InputContext};