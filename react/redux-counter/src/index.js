import React from 'react';
import ReactDOM from 'react-dom';
import { createStore} from 'redux';
import Count from './App.js'
import index from './reducer'
import {Provider} from 'react-redux'
const store = createStore(index);
ReactDOM.render(
<Provider store={store}>
<Count />
</Provider>
, document.getElementById('root'));
// store.subscribe(() => {
//   ReactDOM.render(<Count />, document.getElementById('root'));
// })


