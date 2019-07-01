import * as React from 'react'
import * as ReactDOM from 'react-dom' 
import {HelloComponent} from './hello'
import {Header,About} from './components'
 ReactDOM.render(
       <div className="container-fluid">
           <Header/>
           <About/>
       </div>,
     document.getElementById('root')
 )