import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SignUp from "./pages/signup"
import SignIn from "./pages/signin"
import { useEffect } from 'react'
import Post from './pages/post'

const router = createBrowserRouter([
  {
    path: "/",
    element: <SignIn />
  },
  {
    path: "/signup",
    element: <SignUp />
  },
  {
    path: "/post",
    element: <Post />
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
