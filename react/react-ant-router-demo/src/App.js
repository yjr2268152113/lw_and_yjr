import React from 'react';
import {BrowserRouter as Router,  Route} from 'react-router-dom'
import layout from './page/layout'
import  'antd/dist/antd.css'
//hashhRouter  带#    hashChange
//historyRouter  不带# 实现方式是通过H5的History api
function App() {
  return (
    <Router>
      <Route path="/" component={layout}></Route>
    </Router>

  )
}

export default App;
