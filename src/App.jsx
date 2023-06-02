import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { lazy,Suspense } from 'react'
import SignUp from "./pages/signup"
import SignIn from "./pages/signin"
import Feed from './pages/Feed'
import NotFound from './pages/NotFound'
import Header from './components/Header'
import Loading from './components/Loading'
const User = lazy(() => import('./pages/User.jsx'))
const PostForm = lazy(() => import('./pages/postForm.jsx'))
const Edit = lazy(() => import('./pages/Edit.jsx'))
const PostView = lazy(() => import('./pages/PostView.jsx'))


const router = createBrowserRouter([
  {
    path: "/",
    element: <SignIn />,
    errorElement: <NotFound />
  },
  {
    path: "/signup",
    element: <SignUp />,
    errorElement: <NotFound />
  },
  {
    path: "/post",
    element: <><Header /><PostForm /></>,
    errorElement: <NotFound />
  },
  {
    path: "/feed",
    element: <><Header /><Feed /></>,
    errorElement: <NotFound />
  },
  {
    path: "/user/:id",
    element: <><Header /><User /></>,
    errorElement: <NotFound />
  },
  {
    path: "/me",
    element: <><Header /><User /></>,
    errorElement: <NotFound />
  },
  {
    path: "*",
    element: <NotFound />
  },
  {
    path: "/edit",
    element: <><Header /><Edit /></>,
    errorElement: <NotFound />
  },
  {
    path: "/post/:id",
    element: <><Header /><PostView /></>,
    errorElement: <NotFound />
  }
  
  
])
function App() {



  return (
    <> 
      <Suspense fallback={<Loading />}>   
        <RouterProvider router={router} />
      </Suspense>
    </>

  )
}

export default App
