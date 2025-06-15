import './App.css'
import Header from './UI/Header/Header'
import { Outlet, useLocation } from 'react-router';
import { AuthProvider } from './context/AuthContext';

function App() {
  const location = useLocation();

  return (
    <AuthProvider>
      <div className="w-full">
        <Header />
        <main className={`${location.pathname !== '/signin' ? 'pt-16' : 'overscroll-none'}`}>
          <Outlet />
        </main>
      </div>
    </AuthProvider>
  )
}

export default App
