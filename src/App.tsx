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
        <main className='pt-16'>
          <Outlet />
        </main>
      </div>
    </AuthProvider>
  )
}

export default App
