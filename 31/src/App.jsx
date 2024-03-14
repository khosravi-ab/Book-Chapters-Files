
import { Component } from 'react';
import  './App.css'
import Counter from './components/Counter';

class App extends Component {
render(){
    return(
        <div className='App'>
             <h1>شمارنده من</h1>
             <br/>
             <Counter count={5}/>

        </div>
    )
   
}

}

// const App=()=>{
//     return (
//         <div className="App"> 
//             <h1>شمارنده من</h1>
//             <br/>
//             <Counter/>
//         </div>
      
//     )
// }
export default App;