//container components: handles the business 

//functional or class?

import React, { Component } from 'react';
import TodoForm from './TodoForm'

class TodoContainer extends Component {

    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         todos: ''
    //     }
    // }

    //initialize state
    state = { todos: [] }

    addTodo = (todo) => {

        this.setState({
            todos: [...this.state.todos, todo]
        })
    }

    render() {
        console.log(this.state.todos)
        return (
            <div>
                <TodoForm addTodo={this.addTodo}/>
            </div>
        );
    }
}

export default TodoContainer;