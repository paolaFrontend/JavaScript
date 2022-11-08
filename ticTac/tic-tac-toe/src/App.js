import logo from './logo.svg';
import {
  Routes,
  Route,
  BrowserRouter as Router,
} from "react-router-dom";
import SinglePlayer from './singlePlayer/singlePlayer';
import DoublePlayer from './doublePlayer/doublePlayer';
import Start from './start/start';
import './App.css';

function App() {
  return (
          <Router>
          <Routes>
          <Route path="/" element={<Start></Start>}></Route>
          <Route path="/giocatoreSingolo" element={<SinglePlayer></SinglePlayer>}></Route>
          <Route path="/dueGiocatori" element={<DoublePlayer></DoublePlayer>}></Route>
          </Routes></Router>
  );
}

export default App;
