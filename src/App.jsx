import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SignUp from "./pages/signup"
import SignIn from "./pages/signin"

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>App</div>
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
function App() {

  return (
    <>    
      <RouterProvider router={router} />
    </>

  )
}

export default App
