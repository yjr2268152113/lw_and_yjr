import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Index from './concurrent/index'
import Indexx from './lifeCycle-react15/index'
//hooks 对function 组件增强
function App() {
  const [parentCount,setParentCount]=useState(0)
  return (
    <div >
     {/* <Index/> */}
     <button onClick={()=>{setParentCount(parentCount+1)}}>setParentCount</button>
     <Indexx parentCount={parentCount}/>
    </div>
  );
}
export default App;
