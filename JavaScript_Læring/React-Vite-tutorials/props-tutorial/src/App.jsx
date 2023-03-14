import './App.css'
import Joke from './Joke'

function App() {

  const jokes = [
    {
    id: 1,
    joke: "I used to be a banker, but then i lost interest.",
    rating: 4
    }, {
      id: 2,
      joke: "Im afraid for the calender. Its days are numbered.",
      rating: 4
    }, {
      id: 3,
      joke: "What did the ocean say to the beach? Nothing, it just waved.",
      rating: 3
    }, {
      id: 4,
      joke: "I only know 25 letters of the alphabet. I don't know y.",
      rating: 5
    }
 ]

 
 return (
   <div className="App">
      <h1>Dad Jokes</h1>
      {jokes.map((joke => (
       <Joke key={joke.id} Joke={joke.joke} rating={joke.rating} />)
      ))}  
    </div>
  )
}

export default App
