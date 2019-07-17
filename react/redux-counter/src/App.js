import React,{Component} from 'react';
import{connect} from 'react-redux'


class Count extends Component {
  state = {  }
  handleIn = () => {
    // store.dispatch({ type: 'INCREMENT'})
    this.props.increment()
    
  }
  handleDe = () => {
    // store.dispatch({ type: 'DECREMENT'})
    this.props.decrement()
  }
  handleAddFilm = () => {
    // store.dispatch({
    //   type: 'ADD_FILM', 
    //   film: { name: '123'}
    // })
    this.props.addFilm()
  }
  render() { 
    const {count,films,increment,addFilm,decrement}=this.props
    return (
      <div>
        count: {count}
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <button onClick={addFilm}>添加电影</button>
        {
          // .map((film, i) => (<li></li>))
          films.map((film, i) => {
            return (
              <li key={i}>{ film.name }</li>
            )
          })
        }
      </div>
    );
  }
}
const mapStateToProps=(state)=>{
  return {
    count:state.count,
    films:state.films,
  }
}
const mapDispatchToProps=(dispatch)=>{
  return {
   increment:()=>{dispatch({ type: 'INCREMENT'})},
   decrement:()=>{dispatch({ type: 'DECREMENT'})},
   addFilm:()=>{
  dispatch({
      type: 'ADD_FILM',
      film:{name:123}
  })
   }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Count);

