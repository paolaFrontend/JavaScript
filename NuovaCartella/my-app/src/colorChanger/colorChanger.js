import "./colorChanger.css"
import {Link} from "react-router-dom"
import Changer from "./changer/changer";
import { useEffect, useState } from "react";
import React from "react";

const ColorContext=React.createContext();

function ColorChanger(){
    const [color, setColor]=useState("white");
    useEffect(()=>{
        console.log(color);
    },[color])
    return(
        <div>
            <h1 className="color">Color Changer</h1>
            <div className="pulsanti">
                <input className="red" type="button" value="red" onClick={(e)=>setColor(e.target.value)} ></input>
                <input className="blue" type="button" value="blue" onClick={(e)=>setColor(e.target.value)}></input>
                <input className="yellow"type="button" value="yellow" onClick={(e)=>setColor(e.target.value)}></input>
            </div>
            <ColorContext.Provider value={{color}}><Changer></Changer></ColorContext.Provider>
            <Link className="colorHome" to="/"> Home </Link>
        </div>
    );
}

export {ColorChanger, ColorContext};