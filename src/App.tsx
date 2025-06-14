import { useState } from 'react'
import Feed from './screens/Feed'
import Auth from './screens/Auth';
import './App.css'
import Header from './UI/Header/Header'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router';

function App() {

  return (
    <div className="w-full">
      <Header />
      <Outlet />
      
    </div>
  )
}

export default App
