import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import MobileApp from './MobileApp'
import registerServiceWorker from './registerServiceWorker';
import MediaQuery from 'react-responsive';

var hello = true
console.log(window.innerWidth)
if( window.innerWidth >= 1000 ) {
    ReactDOM.render(<App />, document.getElementById('root'));
    registerServiceWorker();
}else if(window.innerWidth <= 1000){
    ReactDOM.render(<MobileApp />, document.getElementById('root'));
    registerServiceWorker();
}
