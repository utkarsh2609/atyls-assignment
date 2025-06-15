import { useState } from 'react'
import Feed from './screens/Feed'
import Auth from './screens/Auth';
import './App.css'
import Header from './UI/Header/Header'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router';
import { AuthProvider } from './context/AuthContext';

function App() {

  return (
    <AuthProvider>
      <div className="w-full">
        <Header />
        <Outlet />
      </div>
    </AuthProvider>
  )
}

export default App
