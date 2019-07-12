import React, { Component } from 'react'
import ReactDom from 'react-dom'
import Notice  from './Notice'
import {TransitionGroup,CSSTransition} from 'react-transition-group'

class NotificationDom extends Component {
    state = {
        notices: []
    }
    removeNotice(key){
        let  notices = this.state.notices.slice(0)
        let notice=notices.findIndex(e=>e.key=key)
        if(!notice===-1){
            const current=notices[notice]
            if(current.onClose) current.onClose()
            notices.splice(notice,1)
            this.setState({
                notices
            })

        }
    }
    generateKey = () => {
        const { notices } = this.state
        return `notice-${new Date().getTime()}-${notices.length}`
    }
    addNotice = (notice) => {
        console.log('notice', notice)
        const notices = this.state.notices.slice(0)
        const key = this.generateKey()
        notice.key = key
        notices.push(notice)
        this.setState({
            notices
        })
        setTimeout(() => {
            this.removeNotice(key)
        }, notices.duration||200);
    }
    render() {
        const {notices}=this.state
        return (
            <>
            <TransitionGroup className="toast-notification">
            {
                notices.map((notice)=>{
                    return <CSSTransition timeout={300}
                    key={notice.key}
                    classNames="toast-notice-wrapper notice"
                    >
                        <Notice {...notice}/>
                    </CSSTransition>
                })
            }
            </TransitionGroup>
            </>
            )
    }
}

function createNotification() {
    const div = document.createElement('div')
    document.body.appendChild(div)
    // 可以获取组件的实例
    const ref = React.createRef()
    ReactDom.render(<NotificationDom ref={ref} />, div);
    return {
        addNotice(notice) {
            return ref.current.addNotice(notice)
        }
    }
}
export default createNotification()