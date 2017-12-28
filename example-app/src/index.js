import React from 'react';
import ReactDOM from 'react-dom';   // how to throw component into your browser
import './index.css';   // main global css file
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// render function takes 2 arguments : which component to render and where to render
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
