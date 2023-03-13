import './App.css'
import Joke from './Joke'

function App() {

  const jokes = [
    {
    joke: "I used to be a banker, but then i lost interest.",
    rating: 4
    }, {
      joke: "Im afraid for the calender. Its days are numbered.",
      rating: 4
    }, {
      joke: "What did the ocean say to the beach? Nothing, it just waved.",
      rating: 3
    }, {
      joke: "I only know 25 letters of the alphabet. I don't know y.",
      rating: 5
    }
 ]

  return (
    <div className="App">
      <h1>Dad Jokes</h1>
      {jokes.map((joke, index) => {
        return <Joke key={index} Joke={joke.joke} rating={joke.rating}/>
      })}
    </div>
  )
}

export default App
