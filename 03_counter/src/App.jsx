import { useState } from 'react'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0);  // useState is a hook which is responsible to propogate the change in the DOM
  // let counter = 0                        // setCounter sets the value of counter in the UI
  const increment = () => {
    // counter += 1;
    if (counter < 20) {
      setCounter(counter + 1)
      // setCounter(counter + 1)   // using counter + 1 multiple times will not increment the value by 4 because fiber waits and 
      // setCounter(counter + 1)   // sends the calls in batch. It is the same state so only incremented by 1
      // setCounter(counter + 1)

      // but if you have a usecase where you have to increment by 3 then we do it like below:
      // setCounter(prevCounter => prevCounter + 1)  // this is a callback to the previous state of couter and it stores that nad moves to the next
      // setCounter(prevCounter => prevCounter + 1)
      // setCounter(prevCounter => prevCounter + 1)
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
