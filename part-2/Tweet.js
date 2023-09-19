// const Tweet = (props) => {    
//     return (
//         <div>
//             {props.tweets.map(t => (
//                 <div className="tweet" key={t.id}>
//                     <div className="username"><b>Username:</b> {t.username}</div>
//                     <div className="name"><b>Name:</b> {t.name}</div>
//                     <div className="date"><b>Date:</b> {t.date}</div>
//                     <div className="message">{t.message}</div>
//                 </div>
//             ))}
//         </div>
//     );
// }

/** Tweet: a single tweet.
 *
 * Props:
 * - name
 * - username
 * - data
 * - message
 */

function Tweet({ date, message, name, username }) {
    return (
      <div className="tweet">
        <span>{name}</span>
        <span className="username">{username}</span>
        <span className="date">{date}</span>
        <p>{message}</p>
      </div>
    );
  }


  
