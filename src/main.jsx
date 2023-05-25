import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Reset } from './style/reset.jsx'
import { Global } from './style/global.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SignUp from "./pages/signup"
import SignIn from "./pages/signin"



const router = createBrowserRouter([
    {
      path: "/",
      element: <App />
    },
    {
      path: "/signup",
      element: <SignUp />
    },
    {
      path: "/signin",
      element: <SignIn />
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Reset />
    <Global />
    <RouterProvider router={router} />
  </React.StrictMode>
)
