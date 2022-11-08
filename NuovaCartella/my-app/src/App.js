import logo from './logo.svg';
import './App.css';
import Counter from './counter/counter';
import Fetch from './fetch/fetch';
import {Input} from './input/input';
import Home from './home/home';
import {ColorChanger} from './colorChanger/colorChanger';
import{
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router><Routes>
      <Route path= {"/"} element={<Home></Home>}></Route>
      <Route path= {"/counter"} element={<Counter></Counter>}></Route>
      <Route path= {"/fetch"} element={<Fetch></Fetch>}></Route>
      <Route path= {"/input"} element ={<Input></Input>}></Route>
      <Route path= {"/colorChanger"} element= {<ColorChanger></ColorChanger>}></Route>
      </Routes></Router>
  );
}

export default App;
