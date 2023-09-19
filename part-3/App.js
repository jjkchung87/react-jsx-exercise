const App = () => {

    const people = [
        {
            name: "Arlo Chung",
            age: 3,
            hobbies: [
                'barking',
                'sleeping',
                'eating'
            ]
        },
        {
            name: "Justin Chung",
            age: 35,
            hobbies: [
                'golf',
                'bjj',
                'coding'
            ]
        },
        {
            name: "Jenn Kim",
            age: 18,
            hobbies: [
                'eating',
                'sleeping',
                'shopping'
            ]
        }
    ]

    return (
        <div>
            {people.map((person, index) => {
            return(
                    <Person index={index}
                    name={person.name}
                    age={person.age}
                    hobbies={person.hobbies}
             />
            )
            
            })}        
        </div>
        
    )
}

ReactDOM.render(<App />, document.getElementById("root"))