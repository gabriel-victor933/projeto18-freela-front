import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SignUp from "./pages/signup"
import SignIn from "./pages/signin"
import Post from './pages/post'
import Feed from './pages/Feed'
import User from './pages/User'
import NotFound from './pages/NotFound'

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
  },
  {
    path: "/user/:id",
    element: <User />
  },
  {
    path: "*",
    element: <NotFound />
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
