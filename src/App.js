import React from 'react'
import './App.scss'
import Counter1 from './components/Counter1/Counter1'
import Counter2 from './components/Counter2/Counter2'

const App = () => {
  return(
    <div className="App">
      <Counter1 />
      <Counter2 />
    </div> 
  )
}

export default App