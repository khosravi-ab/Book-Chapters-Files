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

const Counter=({count})=>{
    return(
        <div>
        <p>مقدار پراپ :{count}</p>
        </div>
    )
}
export default Counter;