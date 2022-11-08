import "./form.css"
import { InputContext } from "../input";
import { useContext } from "react";


function Form(){
    let inputData = useContext(InputContext);
    return(
        <form className="form">
            <label htmlFor="name">Nome: </label> 
            <input type="text" name="name" value={inputData.userData.name} onChange={(e)=>inputData.setUserData({...inputData.userData, name: e.target.value})}></input>
            <label htmlFor="surname" name="surname">Cognome: </label>
            <input type="text" name="surname" value={inputData.userData.surname} onChange={(e)=>inputData.setUserData({...inputData.userData, surname: e.target.value})}></input>
            <label htmlFor="gender">Genere: </label>
            <select name="gender" value={inputData.userData.gender} onChange={(e)=>inputData.setUserData({...inputData.userData, gender: e.target.value})}>
                <option value='F'> F </option>
                <option value='M'> M </option>
            </select>
        </form>
    );
}

export default Form;