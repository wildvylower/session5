import { createBrowserRouter, RouterProvider } from 'react-router'
import Homepage from './pages/homepage'
import Clubs from './pages/clubs'
import Details from './pages/details'
import About from './pages/about'
import NotFound from './pages/not-found'

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Homepage /> },
    { path: "/clubs", element: <Clubs /> },
    { path: "/clubs/:id", element: <Details /> },
    { path: "/about", element: <About /> },
    { path: "*", element: <NotFound /> }
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App
