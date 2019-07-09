import { combineReducers } from "redux";

const INITITAL_STATE={
    todos:[{
        id:0,
        text:'第一条todo'
    }]
}
function todos(){
    return INITITAL_STATE
}
export default combineReducers({
    todos
})