import "./taskList.css";
import useTaskList from "./useTaskList";
import { createContext, useEffect, useState } from "react";
import Error from "./error/error";
import useText from "./useText";
import Modale from "./modale/modale";
import List from "./list/list";
import useChange from "./useChange";
import { type } from "@testing-library/user-event/dist/type";

const ModalContext= createContext();
const ListContext= createContext();
const EmptyContext=createContext();

function TaskList() {
  const [state, setState]= useTaskList();
  const [ts, setTs, edit, setEdit]= useText(state.tasks);
  const [changeAct, setChangeAct, changeDes, setChangeDes, empty, setEmpty]=useChange(state.tasks);

  useEffect(()=>{console.log(empty)},[empty])

  return (
    <div className="taskList">
      <ModalContext.Provider value={{state, setState}}><Modale></Modale></ModalContext.Provider>
      <div className="add">
      <input
        type="text"
        placeholder="Add"
        value={ts}
        onChange={(e) => setTs(e.target.value)}
      ></input>
      <input className="addButton"
        type="button"
        value="Aggiungi"
        onClick={() =>
          ts != ""
            ? setState({type: "add", payload: ts})
            : setEmpty(true)
        }
      ></input></div>
      <div className="tasks">
        {state.tasks.map((o, ind) => (
          <div key={ind}>
              <ListContext.Provider value={{state, setState, empty, setEmpty, edit, setEdit, changeAct, setChangeAct, changeDes, setChangeDes}}>
                <List activity={o.activity} description={o.description} done={o.done} ind={ind}></List></ListContext.Provider>
          </div>
        ))}
      </div>
      {empty==true && <EmptyContext.Provider value={{setEmpty}}><Error></Error></EmptyContext.Provider>}
    </div>
  );
}

export { TaskList, ListContext, ModalContext, EmptyContext};
