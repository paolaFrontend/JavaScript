import React from 'react'
import "./finePartita.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSlash } from '@fortawesome/free-solid-svg-icons'

function FinePartita(props) {
  return (
    <div><div className={(props.giocatore=="X" || props.giocatore=="O") ? "continue": (props.giocatore=="pari"? "pareggio":'finePartita') } 
    ></div>{props.giocatore=="pari" ? <p>PAREGGIO</p>: <div>
      <div  style={{transform: props.end=="orizzontale" ? "rotate(90deg)":
        (props.end=="verticale" ? "rotate(52deg)": 
            (props.end=="diagonaleSinistra"? "rotate(45deg)" :
                (props.end=="diagonaleDestra"&& "rotate(-45deg)")
            )
        )}}><FontAwesomeIcon classname={"endLine"} icon={faSlash} size="4x" color='white'></FontAwesomeIcon></div>
      <p>VITTORIA DI </p> {props.giocatore}</div>}
        </div>
  )
}

export default FinePartita