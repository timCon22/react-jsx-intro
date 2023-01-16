const Tweet = (props) => {return(

    <span>
        <h3>Wrote by username: {props.username}</h3>
        <h3>Name: {props.name}</h3>
        <h3>Posted: {props.date}</h3>
        <p>{props.message}</p>
    </span>

)}

ReactDOM.render(<Tweet/>, document.getElementById("root"))