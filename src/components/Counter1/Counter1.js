import React from 'react'
import {connect} from 'react-redux'
import {add, sub, addNum} from '../../redux/actions/actions'

const Counter1 = ({counter1, onAdd, onSub, onAddNumber}) => {
  return(
    <div className="counter counter1">
      <h1>Counter</h1>
      <p>{counter1}</p>
      <div className="buttons">
        <button className="btn btn-plus" onClick={onAdd}>+</button>
        <button className="btn btn-minus" onClick={onSub}>-</button>
        <button className="btn btn-plus-num" onClick={() => onAddNumber(10)}>+10</button>
        <button className="btn btn-minus-num" onClick={() => onAddNumber(-15)}>-15</button>
      </div>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    counter1: state.counter1.counter1
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onAdd: () => dispatch(add()),
    onSub: () => dispatch(sub()),
    onAddNumber: num => dispatch(addNum(num))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter1)