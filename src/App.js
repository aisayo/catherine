import React, { Component } from 'react';

import TodoContainer from './TodoContainer'

class App extends Component {
    render() {
        return (
            <TodoContainer todos={'example'}/>
        );
    }
}

export default App;