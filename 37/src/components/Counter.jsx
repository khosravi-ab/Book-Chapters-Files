// import { Component } from "react";

// class Counter extends Component {
//     static defaultProps = {
//         count: 150
// }

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
        <p>counter : {props.count || 90}</p>
        <p>firstname:{props.firstName}</p>
        <p>status :{props.inLoggedIn}</p>
        <p>array:{props.myArray}</p>
        <p>object  :{props.myObject.id} , {props.myObject.name}</p>

        </div>
    )
}
// Counter.defaultProps={
//     count:50
// }
export default Counter;