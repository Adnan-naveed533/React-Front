import { useState } from 'react'
import Login from './Component/Login'
import './App.css'
import UserContextProvider from './Context/UserProvider'
import Profile from './Component/Profile'
function App() {


  return (
    <UserContextProvider>
     <h1>React Context Concept</h1>
     <Login/>
     <Profile/>
    </UserContextProvider>
  )
}

export default App
