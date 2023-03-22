import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Joke from './Joke'
import JokeForm from './JokeForm'

function App() {

  const [favorite, setFavorite] = useState(1)

  const jokes =[
    {
      id: 1,
      text: "I'm afraid for the calendar. Its days are numbered."
    }, {
      id: 2,
      text: "I'm afraid to be addicted to soap, but I'm clean now."
    }
  ]
 
  const handleFavorite = (id) => {
    setFavorite(id)
  }

  const handleNewJoke = (text) => {
    console.log("", text)
  }

  return (
    <div className="App">
    <h1>Dad Jokes</h1>

    {jokes.map(joke => (
      <Joke onFavorite={handleFavorite} favorite={favorite === joke.id} key={joke.id} id={joke.id} text={joke.text} />
    ))}

    <JokeForm onNewJoke={handleNewJoke}/>

    </div>
  )
}

export default App
