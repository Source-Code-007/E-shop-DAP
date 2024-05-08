import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import LayoutOne from './layout/LayoutOne.jsx'
import Homepage from './pages/homepage/Homepage.jsx'
import AboutUs from './pages/aboutUs/AboutUs.jsx'
import TrendyProducts from './pages/trendyProducts/TrendyProducts.jsx'
import Blogs from './pages/blogs/Blogs.jsx'
import Signin from './pages/signin/Signin.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <LayoutOne/>,
    children:[
      {
        path: '/',
        element: <Homepage/>
      },
      {
        path: '/about-us',
        element: <AboutUs/>
      },
      {
        path: '/trendy-products',
        element: <TrendyProducts/>
      },
      {
        path: '/blogs',
        element: <Blogs/>
      },
      {
        path: '/signin',
        element: <Signin/>
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
