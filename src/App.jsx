import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Home from './components/Home'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>REACT.js JSON</h1>
      <Home />
    </div>
  )
}