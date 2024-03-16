
import { useState } from 'react';
import  './App.css'
import Counter from './components/Counter';

const App=()=>{
    const [count,setCount]=useState(0);
    const changeCount=()=>{
        setCount(5);
    }
    return (
        <div className="App">
            <header>
                <h1>شمارنده من</h1>
            </header>
            <p>{count}</p>
            

        </div>
    )
}
export default App;
