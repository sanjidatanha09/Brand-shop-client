import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './layout/Root.jsx';
import ErrorPage from './components/ErrorPage';
import Home from './components/Home';
import AddProduct from './components/AddProduct';
import Login from './Login/Login';
import MyCart from './components/MyCart';
import Registration from './Login/Registration';
import Update from './components/Update';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
       
      },
      {
        path: '/addproduct',
        element:<AddProduct></AddProduct>,
      },
      {
        path: '/mycart',
        element: <MyCart></MyCart>,
        loader: () => fetch('http://localhost:5000/product')
      },
      {
        path:'/update/:id',
        element:<Update></Update>,
        loader: ({ params }) => fetch(`http://localhost:5000/product/${params.id}`)
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/registration',
        element:<Registration></Registration>,
      }
    
    ]
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
