import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
      <h1>Click Counter</h1>
      <div className="card">
        <p className="count-display" data-testid="count-display">
          Count is: <span>{count}</span>
        </p>
        <div className="button-group">
          <button onClick={() => setCount((count) => count + 1)}>
            Increment
          </button>
          <button onClick={() => setCount(0)}>
            Reset
          </button>
          <button onClick = {()=> setCount((count)=>count + 2)}>
            double
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
