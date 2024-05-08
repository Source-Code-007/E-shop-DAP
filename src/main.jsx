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
import store from './redux/store.js'
import { Provider } from 'react-redux'
import Signup from './pages/signup/Signup.jsx'
import Profile from './pages/profile/Profile.jsx'
import PrivateRoute from './privateRoute/PrivateRoute.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <LayoutOne />,
    children: [
      {
        path: '/',
        element: <Homepage />
      },
      {
        path: '/about-us',
        element: <AboutUs />
      },
      {
        path: '/trendy-products',
        element: <TrendyProducts />
      },
      {
        path: '/blogs',
        element: <Blogs />
      },
      {
        path: '/signup',
        element: <Signup />
      },
      {
        path: '/signin',
        element: <Signin />
      },
      {
        path: '/profile',
        element: <PrivateRoute><Profile /></PrivateRoute> 
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
