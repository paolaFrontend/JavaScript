import { useEffect, useReducer, useState } from "react";
import {BaseData, reducer} from "./reducerTaskList";

function useTaskList() {

  const [state, setState]= useReducer(reducer, BaseData);


  // const [deleteTask, setDeleteTask] = useState([]);
  // const [idDel, setIdDel] = useState(null);
  // const [id, setId] = useState(null);
  // const [tasks, setTasks] = useState([
  //   { activity: "task", description: "questa è una task", done: false }
  // ]);


  // useEffect(() => {
  //   setId(null);
  //   setIdDel(null);
  // }, [deleteTask]);

  // useEffect(() => {
  //   let t = [...tasks];
  //   let item = t.splice(id, 1);
  //   id != null && setTasks(t);
  //   id != null && setDeleteTask(add(deleteTask, item));
  // }, [id]);

  // useEffect(() => {
  //   let t = [...deleteTask];
  //   let item = t.splice(idDel, 1);
  //   idDel != null && setTasks(add(tasks, item ));
  //   idDel != null && setDeleteTask(t);
  // }, [idDel]);
  return [state, setState];
}



export default useTaskList;
