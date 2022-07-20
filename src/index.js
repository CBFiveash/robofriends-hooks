import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons'; 


ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.createRoot(document.getElementById('root')).render(<App />); //REACT 18
// registerServiceWorker();
