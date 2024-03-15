// import { Component } from "react";

// class Counter extends Component {
//     render(){
//         const {count}=this.props;
//           return (
//                <div>
//                <p>مقدار پراپ :{count}</p>
//                </div>
//           )

//     }
// }

const Counter=(props)=>{
    return(
        <div>
        <p>counter:{props.count}</p>
        <p>firstname:{props.firstName}</p>
        <p>status :{props.inLoggedIn}</p>
        <p>array:{props.myArray}</p>
        <p>object  :{props.myObject.id} , {props.myObject.name}</p>

        </div>
    )
}
export default Counter;