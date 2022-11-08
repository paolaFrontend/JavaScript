import React from 'react'
import "./start.css"
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComputer, faUserGroup} from "@fortawesome/free-solid-svg-icons";


function Start() {
  return (
    <div className='startScreen'>
    <h2 className='startTitle'>Benvenuto in</h2>
    <h1 className='leftTitle'>TRIS</h1> 
    <p className='startSubTitle'>Con chi vuoi giocare?</p>
    <div className='who'>
    <div className='whoPlay'>
        <div className='one'>
            <div className='circle'>O</div>
            <Link to="/giocatoreSingolo" className="singlePlayer"><FontAwesomeIcon icon={faComputer} size="5x" ></FontAwesomeIcon></Link>
        </div>
        <div className='two'>
            <div className='xfigure'>X</div>
            <Link to="/dueGiocatori" className='doublePlayer'><FontAwesomeIcon icon={faUserGroup} size="5x"></FontAwesomeIcon></Link>
        </div>
    </div>
    
    </div></div>
  )
}

export default Start