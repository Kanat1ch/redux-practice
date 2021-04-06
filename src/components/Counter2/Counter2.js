import React from 'react'
import {connect} from 'react-redux'
import {add2} from '../../redux/actions/actions'

const Counter2 = ({counter2, onChange}) => {
  return(
    <div className="counter counter2">
      <h1>Counter 2</h1>
      <p>{counter2}</p>
      <div className="buttons">
        <button className="btn btn-plus" onClick={() => onChange(1)}>+</button>
        <button className="btn btn-minus" onClick={() => onChange(-1)}>-</button>
      </div>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    counter2: state.counter2.counter2
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onChange: num => dispatch(add2(num))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter2)