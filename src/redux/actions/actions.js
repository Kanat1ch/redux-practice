import { ADD, ADD_NUM, SUB, ADD2 } from './actionTypes';

export function add() {
  return {
    type: ADD
  }
}

export function sub() {
  return {
    type: SUB
  }
}

export function addNum(num) {
  return {
    type: ADD_NUM,
    value: num
  }
}

export function add2(num) {
  return {
    type: ADD2,
    value: num
  }
}