import { useState } from 'react'
// import Navbar from './Navbar'
import './assets/App.css'
import Book from './Book'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="rootcon">
      <Book />
    </div>
  )
}

export default App
