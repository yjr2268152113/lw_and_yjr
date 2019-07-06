import React from 'react'
function Demo2(props){
    const {name,from}=props
    return(
        <div style={{backgroundColor:'#eee'}}>{name}
        {from}
        </div>
    )
}
export default Demo2