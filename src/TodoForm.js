//two ways to a build:

//some will prefer that this component its own state
// some others will prefer to push everything up to container 

//controlled components => input fields are dictated by updating state 
// value attribute of input field will return the value of state

//title, deadline, description 
import React, { Component } from 'react';

class TodoForm extends Component {

    state = {
        title: '',
        deadline: '',
        description: ''
    }

    handleChange = (e) => {
        // const name = e.target.name
        // const value = e.target.value

        const { name, value } = e.target

        this.setState({
            [name]: value
        })
    }

    // handleDescriptionChange = (e) => {
    //     this.setState({
    //         description: e.target.value
    //     })
    // }

    // handleDeadlineChange = (e) => {
    //     this.setState({
    //         deadline: e.target.value
    //     })
    // }

    handleSubmit = (e) => {
        // to take updated state 
        // send it to the todocontainer 
        // add it to current state: todo's
        e.preventDefault()
        this.props.addTodo(this.state)
        this.resetForm()
    }

    resetForm = () => {
        this.setState({
            title: '',
            deadline: '',
            description: ''
        })
    }

    render() {
      
        return (
            <form onSubmit={this.handleSubmit}>

                title: <input 
                    type='text'
                    onChange={this.handleChange}
                    value={this.state.title}
                    name="title"
                />
                <br/>
                description: <input 
                    type='text' 
                    value={this.state.description} 
                    onChange={this.handleChange}
                    name="description"

                />
                <br/>
                deadline: <input 
                            type='text' 
                            value={this.state.deadline} 
                            onChange={this.handleChange}
                            name="deadline"
                            />

                <input type='submit' value="Create Todo" />

            </form>
 
        );
    }
}

export default TodoForm;