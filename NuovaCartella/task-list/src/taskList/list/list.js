import React, { useContext } from "react";
import { ListContext } from "../taskList";
import "./list.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

function List(props) {
  const list = useContext(ListContext);
  return (
    <div>
      <div className="task">
        <div className="check">
          <input
            type="checkbox"
            checked={props.done}
            onChange={(e) =>
              list.setState({type: "done", payload:{ind: props.ind, check: e.target.checked}})}
          ></input>
        </div>
        {props.done == true ? (
          <div className="singleTaskDel">
            <del>{props.activity}</del>
          </div>
        ) : (
          <div className="singleTask">
            {list.changeAct.f == true && list.changeAct.id == props.ind ? (
              <input
                type="text"
                placeholder={props.activity}
                onChange={(e) => list.setEdit(e.target.value)}
              ></input>
            ) : (
              <label>{props.activity}</label>
            )}
          </div>
        )}
        <div className="buttons">
          <div className="changeAct">
            <FontAwesomeIcon
              className="ActChangeButton"
              icon={faPenToSquare}
              color="grey"
              size="1x"
              onClick={() => list.setChangeAct({ f: true, id: props.ind })}
              onDoubleClick={() =>
                list.edit != ""
                  ? list.setState({ type:"changeActivity", payload: {ind: props.ind, edit: list.edit} })
                  : list.setEmpty(true)
              }
            ></FontAwesomeIcon>
          </div>
          <FontAwesomeIcon
            className="DelButton"
            icon={faTrashCan}
            color="grey"
            size="1x"
            onClick={() => list.setState({type: "deleteTask", payload: props.ind})}
          ></FontAwesomeIcon>
        </div>
      </div>
      {props.done == false && (
        <details className="details">
          <summary>Dettagli</summary>
          <div className="det">
            <div className="description">
              {list.changeDes.f == true && list.changeDes.id == props.ind ? (
                <input
                  type="text"
                  placeholder={props.description}
                  onChange={(e) => list.setEdit(e.target.value)}
                ></input>
              ) : (
                <label>{props.description}</label>
              )}
            </div>
            <div className="changeDet">
              <FontAwesomeIcon
                className="descChangeButton"
                icon={faPenToSquare}
                color="grey"
                size="1x"
                onClick={() => list.setChangeDes({ f: true, id: props.ind })}
                onDoubleClick={() =>
                  list.edit != ""
                    ? list.setState({type:"changeDescription", payload: {ind: props.ind, edit: list.edit}})
                    : list.setEmpty(true)
                }
              ></FontAwesomeIcon>
            </div>
          </div>
        </details>
      )}
    </div>
  );
}

export default List;
