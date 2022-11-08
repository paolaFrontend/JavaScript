import "./error.css"
import React, { useContext } from 'react'
import "animate.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { EmptyContext } from "../taskList";

function Error() {
  const empty=useContext(EmptyContext);
  return (
    <div className="error">
      
      <label>Errore! Inserire una stringa valida</label>
      <div className="closeErrorButton">
              <FontAwesomeIcon
                icon={faCircleXmark}
                color="white"
                size="1x"
                onClick={()=>empty.setEmpty(false)}
              ></FontAwesomeIcon> </div></div>
  )
}

export default Error;
