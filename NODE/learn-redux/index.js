const {createStore,combineReducers}= require('redux')
//action.type 是一个常量  决定了dispatch要干什么
//reducer可以收到action的信息
const add={
    type:'INCREMENT'
}
const reduce={
    type:'DECREMENT'
}
//加  ADD_FILM
// type+payload(除了type以外的字段)
function filmReducer(state=[],action){
   switch(action.type){
       case 'ADD_FILM':return [...state,action.film];
       default:
           return state;
   }
}
function reducer(state,action){
    console.log('reducer->>>',action)
    if(action.type==='INCREMENT'){
         return state+1;
    }
    else if(action.type==='DECREMENT'){
        return state-1;
    }else{
        return 0
    }
   
}
const index=combineReducers({
    count:reducer,
    films:filmReducer
})
// createStore 只接受reducer
const store=createStore(index);
store.subscribe(()=>{
    console.log(store.getState())
})
store.dispatch(add)
store.dispatch(reduce)
store.dispatch(reduce)
store.dispatch({
    type:'ADD_FILM',
    id:0,
    film:{name:'狮子王'}
})
 
