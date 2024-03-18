
import { useState } from 'react';
import  './App.css'
import Counter from './components/Counter';

const App=()=>{
    const [count,setCount]=useState(0);
const increaseCount=()=>{
    setCount(count+1);
}
const decreaseCount=()=>{
    setCount(count-1);
}
const resetCount=()=>{
    setCount(0);
}
    return (
        <div className="App">
            <header>
                <h1>شمارنده من</h1>
            </header>
            {/* <Counter inc={increaseCount} dec={decreaseCount} reset={resetCount} count={count} /> */}
            <Counter inc="name" dec={decreaseCount} rest={resetCount} count={true}/>

        </div>
    )
}
export default App;
