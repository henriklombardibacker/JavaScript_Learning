import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import 'bootstrap/dist/css/bootstrap.css';
import Counter from './Components/Counter';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Counter />
  </React.StrictMode>,
)
