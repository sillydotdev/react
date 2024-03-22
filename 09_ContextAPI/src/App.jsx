import { useState } from 'react'
import './App.css'
import UserContext from './context/UserContext'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextProvide'

function App() {

  return (
    <UserContextProvider>
      <h1>This is my Portfolio</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
