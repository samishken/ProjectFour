import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter as Router} from 'react-router-dom'
import App from './App';
import Hello from './components/Hello/Hello'

ReactDOM.render(
    <Router>
        <App />
    </Router>,
    document.getElementById('root')
)