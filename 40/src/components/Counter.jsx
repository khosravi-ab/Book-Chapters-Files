import {Component} from "react";
class Counter extends Component {
    constructor() {
        super();
        this.state = {
            name: "عباس"
        }
        // this.changeName = this.changeName.bind(this);
    }
    // changeName() {
    //     this.setState({name: "محمد"})
    // }
    changeName = () => {
        this.setState({name: "محمد"})
    }
    render() {
        return (
            <div>
                <p>{this.state.name}</p>
                <button onClick={this.changeName}>تغییر نام</button>
            </div>
        )
    }
}

export default Counter;
