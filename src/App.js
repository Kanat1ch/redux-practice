import React, { Component } from 'react'
import {connect} from 'react-redux'
import './App.scss'

class App extends Component {
  render() {

    const {counter} = this.props

    return(
      <div className="App">
        <h1>Counter</h1>
        <p>{counter}</p>
        <div className="buttons">
          <button className="btn btn-plus">+</button>
          <button className="btn btn-minus">-</button>
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

export default connect(mapStateToProps)(App)