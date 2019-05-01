import React, {Component} from 'react';
import Tododisplay from './Tododisplay';

class Todo extends Component {
    constructor(){
        super();
        this.state = {
            list: ['Code', 'Sleep', 'More Code', 'Walk the Dog']
        }
    }
    render(){
        const mappedList = this.state.list.map((item, i) => {
            return(
                <Tododisplay key={i} items={item}/>
            )
        })
        return (
            <div>
                <h1>To do List</h1>
                {mappedList}
            </div>
        )
    }
}

export default Todo;