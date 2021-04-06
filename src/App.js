import React, { Component } from 'react'
import {connect} from 'react-redux'
import './App.scss'

class App extends Component {
  render() {

    const {counter, onAdd, onSub} = this.props

    return(
      <div className="App">
        <h1>Counter</h1>
        <p>{counter}</p>
        <div className="buttons">
          <button className="btn btn-plus" onClick={onAdd}>+</button>
          <button className="btn btn-minus" onClick={onSub}>-</button>
        </div>
      </div> 
    )
  }
}

function mapStateToProps(state) {
  return {
    counter: state.counter
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onAdd: () => dispatch({ type: 'ADD' }),
    onSub: () => dispatch({ type: 'SUB' })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)