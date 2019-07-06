import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// 把app组件挂在到#root上去
ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<div>root1</div>, document.getElementById('root1'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
