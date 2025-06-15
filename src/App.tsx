import './App.css'
import Header from './UI/Header/Header'
import { Outlet } from 'react-router';
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
