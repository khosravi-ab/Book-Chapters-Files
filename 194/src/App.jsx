import { useState } from 'react'
// import { store, increment, currentValue } from "./redux";
import { store } from "./app/store";
import { increment, decrement, incrementByAmount } from "./features/counter/counterSlice";

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => store.dispatch(increment(2))}>
            count is {store.getState().value}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      </div>
  )
}

export default App;
