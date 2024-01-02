import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0);  // useState is a hook which is responsible to propogate the change in the DOM
  // let counter = 0                        // setCounter sets the value of counter in the UI
  const increment = () => {
    // counter += 1;
    if (counter < 20) {
      setCounter(counter + 1)
    }
  }

  const decrement = () => {
    // counter -= 1;
    if(counter > 0) {
      setCounter(counter - 1)
    }
  }

  return (
    <>
      <h2>Counter App</h2>
      <button>{counter}</button> <br /><br />
      <button
      onClick={increment}
      >Increment</button> <></>
      <button
      onClick={decrement}
      >Decrement</button>
    </>
  )
}

export default App
