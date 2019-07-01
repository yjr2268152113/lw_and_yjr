import * as React from 'react'

//无状态的表示型组件
export const Header:React.StatelessComponent=()=>{
    return(
       <div className="row">
           <h1>Application Header</h1>
       </div>
    )
}