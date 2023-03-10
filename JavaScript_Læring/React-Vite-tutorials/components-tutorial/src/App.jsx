import './App.css'
import RandomImage from './RandomImage'

function App() {

  const now = new Date().toString()

  return (
    <>
      <div className="App">
        <h1>Hello World</h1>
        <p>{6 + 9}</p>
        <p>{now}</p>
      </div>

      <RandomImage />
    </>
  )
}

export default App
