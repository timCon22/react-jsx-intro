const Person = (props) => {
    
    return(
    <div>
        <p>Learn some more info about this person</p>
        <p>Hi my name is {props.name} and I'm {props.age}</p>
        <p>{props.name} <b>{props.age < 18 ? "you are too young to vote!" : "please go vote!" }</b></p>
    </div>
)}

ReactDOM.render(<FirstComp/>, document.getElementById("root"))