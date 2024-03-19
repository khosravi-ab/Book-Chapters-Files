
import { useState } from 'react';
import styles from './App.module.css';
import Counter from './components/Counter';

const App=()=>{
    const [count,setCount]=useState(0);
const increaseCount=()=>{
    setCount(count+1);
}
const decreaseCount=()=>{
    if(count === 0) {
        return alert("مقدار شمارنده نمی تواند منفی باشد ");
    }

    setCount(count-1);
}
const resetCount=()=>{
    setCount(0);
}
const myStyle = {color: 'blue', border: '1px solid green'};
    return (
        <div className={ styles.App }>
        <header className={styles.AppHeader}>
            {/* <h1 style={ {color: 'aqua', border: '1px solid red'}}>شمارنده من</h1> */}
            <h1 style={myStyle}>شمارنده من</h1>
            </header>
            <Counter inc={increaseCount} dec={decreaseCount} reset={resetCount} count={count} />

        </div>
    )
}
export default App;
