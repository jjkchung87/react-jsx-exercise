const Person = (props) => {
    let slicedName = props.name.slice(0,6)
    return (
        <p>
            Learn something about this person, {slicedName}
            <h3>{props.age > 18 ? "Please go vote!" : "You must be 18"}</h3>
            <ul>
                Hobbies:
                {props.hobbies.map(h => (<li>{h}</li>))}
            </ul>
        </p>
    )
}