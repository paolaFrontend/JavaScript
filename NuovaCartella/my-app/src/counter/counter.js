import "./counter.css";
import Number from "./number/number";
import React, {useState, useEffect} from "react";


import { Link } from "react-router-dom";
function Counter(){
    const [counter, setCounter]=useState(0);
    useEffect(()=>{
        if(counter<=0)
          setCounter(0);  
    },[counter])
   return(
       <div>
           <h1 className="counter">counter</h1>
           <div className="counterContainer">
               <div className="opContainer">
                  <button onClick= {()=>setCounter(counter+1) }>Aggiungi</button>
                  <button className="counterRed" onClick={()=>setCounter(counter-1)}>Diminuisci</button>
               </div>
               <Number counter={counter}></Number>
           </div>
           <Link to={"/"} className="counterHome">Home</Link>
       </div>
       
   ); 
}

export default Counter;