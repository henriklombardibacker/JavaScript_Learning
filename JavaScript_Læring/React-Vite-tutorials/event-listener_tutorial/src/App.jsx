import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Form from './Form'

function App() {

  function handleClick(e) {
    console.log('It did something!')
  }

  function handleSubmit(e) {
    console.log('Form submitted')
  }

  return (
    <div className="App">

      <button onClick={handleClick}>Do something</button>

      <Form onSubmit={handleSubmit} />

    </div>
  )
}

export default App
