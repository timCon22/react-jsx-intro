const App = () => (
    <div>
        <Tweet username="TheGuy180" name="Jason" date="2/13/2023" message="This is a test!"/>
        <Tweet username="TheGuy89" name="Person" date="4/13/2023" message="This is yet another test!"/>
        <Tweet username="TheGuy180" name="Jason" date="4/20/2023" message="This is definitly not a test"/>
    </div>
)

ReactDOM.render(<App/>, document.getElementById("root"))