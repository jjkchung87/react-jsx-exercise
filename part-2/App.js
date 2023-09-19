// const App = () => {
//     let tweets = [
//         {
//             username:"Arlo",
//             name:"Arlo Chung",
//             date: new Date(),
//             message: "my first tweet!"
//         },
//         {
//             username:"Harper",
//             name:"Harper Chung",
//             date: new Date("2023-08-01"),
//             message: "Waaaaah!"
//         },
//         {
//             username:"Willow",
//             name:"Willow Chung",
//             date: new Date('2023-08-15'),
//             message: "Bow wow wow!"
//         },
//     ]
//     return (
//         <Tweet tweets={tweets}/>
//     )
// }

// ReactDOM.render(<App />, document.getElementById("root"))


// function App() {
//     return (
//       <div>
//         <Tweet
//           name="Matt Lane"
//           username="mmmaaatttttt"
//           date={new Date('2022-01-01').toDateString()}
//           message="This app will disrupt everything!!"
//         />
//         <Tweet
//           name="Elie Schoppik"
//           username="eschoppik"
//           date={new Date().toDateString()}
//           message="#Ilovehashtags"
//         />
//         <Tweet
//           name="Tim Garcia"
//           username="TimGarcia0"
//           date={new Date('2023-08-01').toDateString()}
//           message="Follow me on Twitter!"
//         />
//       </div>
//     );
//   }



function App() {
    const tweets = [
      {
        name: "Matt Lane",
        username: "mmmaaatttttt",
        date: new Date('2022-01-01').toDateString(),
        message: "This app will disrupt everything!!",
      },
      {
        name: "Elie Schoppik",
        username: "eschoppik",
        date: new Date().toDateString(),
        message: "#Ilovehashtags",
      },
      {
        name: "Tim Garcia",
        username: "TimGarcia0",
        date: new Date('2023-08-01').toDateString(),
        message: "Follow me on Twitter!",
      },
    ];
  
    return (
      <div>
        {tweets.map((tweet, index) => (
          <Tweet
            key={index}
            name={tweet.name}
            username={tweet.username}
            date={tweet.date}
            message={tweet.message}
          />
        ))}
      </div>
    );
  }

ReactDOM.render(<App />, document.getElementById("root"))
