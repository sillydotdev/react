import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Cards'

function App() {
  const [count, setCount] = useState(0)
  let myobj = {
    name: "Kamran",
    age: "22"
  }

  let myArr = [1, 2, 3]

  return (
    <>
      <h1 className='bg-green-700 text-black p-4 rounded-xl mb-4'>Tailwind</h1>
      <Card username = "Jeniffer" />
      <Card username = "Jessica" btnTxt = "Click here" />
    </>
  )
}

export default App
