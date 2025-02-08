import { createBrowserRouter, RouterProvider } from 'react-router';
import English from './Pages/English-Page/English';
import German from './Pages/Russian-Page/German';
function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<English></English>
    },
    {
      path:'/english',
      element:<English></English>
    },
    {
      path:'/german',
      element:<German></German>
    }
  ])
  return (
     <RouterProvider router={router}>
     </RouterProvider>
  )
}
export default App
