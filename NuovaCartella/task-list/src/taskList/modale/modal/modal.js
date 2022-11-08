import "./modal.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { ModalContext } from "../../taskList";

import React, { useContext, useState } from "react";

function Modal(props) {
//   const [check, setCheck] = useState([]);
  const modal = useContext(ModalContext);
  return (
    <div>
      <div className="modalButton">
        {props.show == true && (
          <div className="modale">
            <div className="closeModalButton">
              <FontAwesomeIcon
                icon={faCircleXmark}
                color="red"
                size="1x"
                onClick={props.close}
              ></FontAwesomeIcon>
            </div>
            {modal.state.deleteTask.map((o, ind) => (
              <div key={ind}>
                <input
                  type="checkbox"
                  checked={false}
                  onChange={() => modal.setState({type: "ripristina", payload: ind})}
                ></input>
                <label>{o.activity}</label>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* <button value="conferma" onClick={()=>check.forEach((o)=>{o.check==true && setIdDel(check.id)})}></button> */}
      {/* </div>))} */}
    </div>
  );
}

export default Modal;
