import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SignUp from "./pages/signup"
import SignIn from "./pages/signin"
import PostForm from './pages/postForm'
import Feed from './pages/Feed'
import User from './pages/User'
import NotFound from './pages/NotFound'
import Edit from './pages/Edit'
import PostView from './pages/PostView'
import Header from './components/Header'

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
    element: <><Header /><PostForm /></>
  },
  {
    path: "/feed",
    element: <><Header /><Feed /></>
  },
  {
    path: "/user/:id",
    element: <><Header /><User /></>
  },
  {
    path: "/me",
    element: <><Header /><User /></>
  },
  {
    path: "*",
    element: <NotFound />
  },
  {
    path: "/edit",
    element: <><Header /><Edit /></>
  },
  {
    path: "/post/:id",
    element: <><Header /><PostView /></>
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
