import { ADD, ADD_NUM, SUB } from '../actions/actionTypes'

const initialState = {
  counter1: 0
}

export default function counter1(state = initialState, action) {
  switch (action.type) {
    case ADD:
      return {
        counter1: state.counter1 + 1
      }
    case SUB:
      return {
        counter1: state.counter1 - 1
      }
    case ADD_NUM:
      return {
        counter1: state.counter1 + action.value
      }
    default:
      return state
  }
}