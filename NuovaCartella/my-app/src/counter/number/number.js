import "./number.css"

function Number(props){
    return(
        <div className="numberContainer">
            <p>{props.counter}</p>
        </div>
    );
}

export default Number;