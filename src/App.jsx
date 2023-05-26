import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SignUp from "./pages/signup"
import SignIn from "./pages/signin"
import { useEffect } from 'react'

const router = createBrowserRouter([
  {
    path: "/",
    element: <SignIn />
  },
  {
    path: "/signup",
    element: <SignUp />
  }
])
function App() {



  return (
    <>    
      <RouterProvider router={router} />
    </>

  )
}

export default App
