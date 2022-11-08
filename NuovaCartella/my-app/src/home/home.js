import "./home.css"
import Logo from "../media/React_Native_Logo.png"
import { Link } from "react-router-dom";

function Home(){
    return(
        <div>
            <h1 className= "home">home</h1>
            <div className="homeContainer">
                <Link to={"/counter"}> counter</Link>
                <Link to={"/fetch"}> fetch</Link>
                <Link to={"/input"}> input</Link>
                <Link to={"/colorChanger"}> color changer</Link>
            </div>
                <p className="testo">Scegli la tua opzione</p>
            <img src={Logo} className="homeContainer_logo"></img>
        </div>
    );
}

export default Home;