import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SignUp from "./pages/signup"
import SignIn from "./pages/signin"
import { useEffect } from 'react'
import Post from './pages/post'
import Feed from './pages/Feed'

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
  },
  {
    path: "/feed",
    element: <Feed />
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
