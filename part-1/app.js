const App = () => {
    return (
    <div>
        <FirstComp/>
        <NamedComp name="Jason"/>
    </div>)
}

ReactDOM.render(<App/>, document.getElementById("root"))