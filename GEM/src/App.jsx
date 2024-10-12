import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <div>
      <div className="card">
	<input type="text" ></input><button> Confirm input!</button>
      </div>
     </div>
    </div>
  )
}

export default App
