import "./modale.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Modal from "./modal/modal";

function Modale() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="modalButton">
      <FontAwesomeIcon
        icon={faTrashCan}
        color="white"
        size="1x"
        onClick={handleShow}
      ></FontAwesomeIcon>
      <Modal show={show} close={handleClose}>
        {" "}
      </Modal>
    </div>
  );
}

export default Modale;
