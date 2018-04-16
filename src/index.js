import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Hello from './components/Hello/Hello'

ReactDOM.render(<Hello />, document.getElementById('root'));
registerServiceWorker();
