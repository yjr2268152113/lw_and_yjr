import React,{Component} from 'react'
class CommentInput extends Component{
    handlePublish=()=>{
        const commentContent=this.refs.commentContent.value
        const userName=this.refs.userName.value
        // console.log({userName,commentContent})
        const {onPublish}=this.props 
        onPublish(userName,commentContent)
    }
    render(){
        return (
            <div>
                用户名:<input type="text" ref="userName" />
                评论内容：<textarea name="" ref="commentContent" id="" cols=""></textarea>
                  <button onClick={this.handlePublish}></button>
            </div>
        )
    }
}
export default CommentInput