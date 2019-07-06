import React from 'react';
import logo from './logo.svg';
import './App.css';
import Demo1 from './Demo1'
import Demo2 from './Demo2'
function renderStr(){
  return 'string'
}
function App() {
  const lis=[
    <li>1</li>,
    <li>2</li>
  ]
  const age=18
  const styobj={color:'blue'}
  const foo=()=>{
    console.log('blue')
  }
  const bar=()=>{
    return function(){
      console.log('bar')
    }
  }
  const names=['name1','name2']
  const nameNodes=names.map((name,index)=>{
    return (<div>
      {name}
    </div>)
  })
  return (
    <div>
      <Demo1 name={names} from="App" onClick="{(a)=>{
        console.log(a)
      }}"/>
      <Demo2 name={names} from="App"/>
     <p style={{color:'red'}} onClick={()=>{console.log('red')}}>{age}</p>
     <p style={styobj} onClick={foo}>{age}</p>
     <p onClick={bar()}>{age}</p>
     {lis}
     {
       names.map((name,index)=>{
         return (<div>
           {name}
         </div>)
       })
     }
     {
       nameNodes
     }
     {
       renderStr()
     }
     { true?<div>登录</div>:<a href="#">登录</a>}
    </div>
  );
}
export default App;
