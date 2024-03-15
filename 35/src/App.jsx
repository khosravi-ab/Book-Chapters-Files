
import { Component } from 'react';
import  './App.css'
import Counter from './components/Counter';

class App extends Component {
render(){
    return(
        <div className='App'>
             <h1>شمارنده من</h1>
             <br/>
             <Counter  firstName={"عباس"} isLoggedIn={true} myArray={[1,2,3,4]} myObject={{id:1,name:"ali"}}
             />

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