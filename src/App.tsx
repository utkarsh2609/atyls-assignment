import { useState } from 'react'
import './App.css'
import Feed from './screens/Feed'
import Header from './UI/Header/Header'

function App() {

  return (
    <div className="w-full">
      <Header />
      <Feed />
    </div>
  )
}

export default App
