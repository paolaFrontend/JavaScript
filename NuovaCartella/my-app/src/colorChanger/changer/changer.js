import "./changer.css"
import { ColorContext } from "../colorChanger";
import { useContext, useEffect } from "react";

function Changer(){
    let color=useContext(ColorContext);
    
    return(
        <div className="changer">
            <span style={{background: color.color}}></span>
            <p></p>
        </div>
    );
}

export default Changer;