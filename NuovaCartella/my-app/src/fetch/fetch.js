import "./fetch.css"
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./card/card";

axios.defaults.headers.post['Content-Type']='application/x-www-form-urlencoded';
function Fetch(){
    const [res,setRes]=useState(undefined);
    useEffect(async()=>{
            if(res===undefined){
                var res2=await axios.get("https://randomuser.me/api");
                setRes(res2);
                console.log(res2);
            }
    });
    return(
        <div>
            <h1 className="fetch">fetch</h1>
            {res == undefined ? "loading" : <Card first= {res.data.results[0].name.first} last={res.data.results[0].name.last} 
            title={res.data.results[0].name.title}  picture={res.data.results[0].picture.medium} gender={res.data.results[0].gender} 
            nat={res.data.results[0].nat} date={res.data.results[0].dob.date} age={res.data.results[0].dob.age} 
            cell={res.data.results[0].cell} email={res.data.results[0].email} city={res.data.results[0].location.city}
            latitude={res.data.results[0].location.coordinates.latitude} longitude={res.data.results[0].location.coordinates.longitude}
            country={res.data.results[0].location.country} postcode={res.data.results[0].location.postcode} state={res.data.results[0].location.state}
            nameStreet={res.data.results[0].location.street.name} numberStreet={res.data.results[0].location.street.number}></Card>}
            <Link to={"/"} className="fetchHome"> Home</Link>
        </div>
    );
}
export default Fetch;