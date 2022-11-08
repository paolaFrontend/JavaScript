import "./card.css";

function Card(props){
    return(
        <div>
            <img className="dataFoto" src={props.picture}></img>
            <div className="data">
            <p>Nome: {props.first} </p>
            <p>Cognome: {props.last}</p>
            <p>Titolo: {props.title}</p>
            <p>Genere: {props.gender}</p>
            <p>Luogo di Nascita: {props.nat}</p>
            <p>Data di Nascita: {props.date}</p>
            <p>Età: {props.age}</p>
            <p>Cellulare: {props.cell}</p>
            <p>Email: {props.email}</p>
            <p>Locazione: ({props.latitude};{props.longitude}), {props.state}, {props.country}, {props.city}</p>
            <p>Strada: {props.nameStreet}, {props.numberStreet}</p>
            </div>
        </div>
    );

}

export default Card;