import logo from './logo.svg';
import './App.css';
import {TaskList} from './taskList/taskList';
import Modale from './taskList/modale/modale';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1 className= "title">TaskList</h1> 
      </header>
      <TaskList></TaskList>
      
    </div>
  );
}

export default App;
