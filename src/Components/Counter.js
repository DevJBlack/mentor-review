import React, {Component} from 'react';

class Counter extends Component {
    constructor(){
        super();
        this.state = {
            count: 0
        }
    }

    handleAdd = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    handleSubtract(){
        this.setState({
            count: this.state.count - 1
        })
    }

    render(){
        return(
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.handleAdd}>Add</button>
                <button onClick={() => this.handleSubtract()}>Subtract</button>
            </div>
        )
    }
}

export default Counter;