import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router';
import Feed from './screens/Feed.tsx';
import Auth from './screens/Auth.tsx';

const router = createBrowserRouter([
  {
    path: "/", Component: App, children: [
      { index: true, Component: Feed },
      { path: '/signin', Component: Auth },
    ],
  }
]);

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
  // <App />
  // <StrictMode>
  // </StrictMode>
  ,
)
