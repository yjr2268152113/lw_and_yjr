import {createStore} from 'redux'
import rootReducer from '../reducers'
export default function configStore(){
    //createStore返回实例  单一状态树\
    //redux state reducer(函数，返回状态) 
    //  action 
    const store=createStore(rootReducer)
    return store
}