import React, {Component} from 'react'
function  foo(a){
    console.log(a)
}
foo('内容')
class Demo1 extends Component{
    render(){
        console.log(this.props)
        return (<div style={{backgroundColor:'red'}} onClick={
            ()=>{
                const {onClick}=this.props;
                onClick('内容来自子组件')
            }
        }>demo1</div>)
    }
}
export default Demo1