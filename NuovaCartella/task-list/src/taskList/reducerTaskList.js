import { add, done, changeActivity, changeDet } from "./helper";

let BaseData = {
  deleteTask: [],
  tasks: [{
    activity: "task",
    description: "questa è una task",
    done: false,
  }]
};

function reducer(state, action) {
  switch (action.type) {
    case "add": {
      return {
        ...state,
        tasks: [
          ...state.tasks,
          {
            activity: action.payload,
            description: "Aggiungi descrizione",
            done: false,
          },
        ],
      };
    }
    case "done": {
      return {
        ...state,
        tasks: done(state.tasks, action.payload.ind, action.payload.check),
      };
    }
    case "changeActivity": {
      return {
        ...state,
        tasks: changeActivity(
          state.tasks,
          action.payload.ind,
          action.payload.edit
        )
      };
    }
    case "changeDescription": {
      return {
        ...state,
        tasks: changeDet(state.tasks, action.payload.ind, action.payload.edit)
      };
    }
    case "deleteTask": {
      let t = [...state.tasks];
      let item = t.splice(action.payload, 1);
      return {...state, tasks: t,
        deleteTask: add(state.deleteTask, item)};
    }
    case "ripristina": {
      let t = [...state.deleteTask];
      let item = t.splice(action.payload, 1);
      return { ...state, tasks: add(state.tasks, item), deleteTask: t};
    }
  }
}

export { BaseData, reducer };
