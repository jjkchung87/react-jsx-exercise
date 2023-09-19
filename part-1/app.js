
const App = () =>{
    return(
        <div>
            <FirstComponent />
            <NamedComponent name="Arlo"/>
        </div>
    )
}


ReactDOM.render(<App />, document.getElementById("root"))
