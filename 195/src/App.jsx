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
            <div>
                <button
                    style={{ marginRight: "10px" }}
                    onClick={() => store.dispatch(increment(1))}
                >
                    +
                </button>
                <button onClick={() => store.dispatch(increment(2))}>
                    count is {store.getState().value}
                </button>
                <button
                    style={{ marginLeft: "10px" }}
                    onClick={() => store.dispatch(decrement(1))}
                >
                    -
                </button>
            </div>
            <div>
                <button
                    style={{ marginRight: "10px", marginTop: "10px" }}
                    onClick={() => store.dispatch(incrementByAmount(1))}
                >
                    Add Amount
                </button>
                <input
                    aria-level="Set increment Amount"
                    // value={}
                    onChange={() => {}}
                    style={{
                        height: "30px",
                        width: "30px",
                    }}
                />
            </div>

            <button
                style={{ marginTop: "10px" }}
                // onClick={() => store.dispatch(incrementByAmount(1))}
            >
                Add Async
            </button>
        </div>
    </div>
);

}

export default App;
