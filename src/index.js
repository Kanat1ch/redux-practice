import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import reportWebVitals from './reportWebVitals'
import {createStore, applyMiddleware} from 'redux'
import rootReducer from './redux/rootReducer'
import {Provider} from 'react-redux'

function loggerMiddleware(store) {
  return function(next) {
    return function (action) {
      const result = next(action)
      console.log('Middleware', store.getState())
      return result
    }
  }
}

const store = createStore(rootReducer, applyMiddleware(loggerMiddleware))

const app = (
  <Provider store={store}>
    <App />
  </Provider>
)

ReactDOM.render(
  app,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
