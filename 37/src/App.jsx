
import { Component } from 'react';
import  './App.css'
import Counter from './components/Counter';

class App extends Component {
    state = {
        count: 0,
        name: "Abbas",
        family: "Khosravi"
    }
    render() {
        let {count, name, family} = this.state;
        return (
            <div className="App">
                <header>
                    <h1>شمارنده من</h1>
                </header>
                <p>{count}</p>
                <p>{name}</p>
                <p>{family}</p>

            </div>
        )
    }
}

export default App;
