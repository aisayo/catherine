//where you are appending react application to dom 

import React from 'react'
import ReactDOM from 'react-dom';

import App from './App'

//2 parameters
ReactDOM.render(
    <App />,
    document.getElementById('react')
)