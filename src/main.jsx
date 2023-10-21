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
import Registration from './Login/Registration';
import Update from './components/Update';
import AuthProvider from './Providers.jsx/AuthProvider';
import Users from './Users/Users';
import BrandName from './components/Brands/BrandName';
import AllBrands from './components/Brands/AllBrands';
import ProductInfo from './components/ProductInfo';
import PrivateRoute from './layout/PrivateRoute';
import BtnDetails from './components/Brands/BtnDetails';
import MyCart from './MyCart/MyCart';


// btndetails / 65311bae3925d787537d47d0



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader: () => fetch('/data.json'),
       
      },
      {
        path:'/allbrand/:brandname',
        element:<AllBrands></AllBrands>,
        loader: ({params}) => fetch(`http://localhost:5000/product/${params.brandname}`),
      

      },
      {
        path: '/addproduct',
        element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>,
      },
      {
        path: '/mycart',
        element: <PrivateRoute><MyCart></MyCart></PrivateRoute>,
        loader: () => fetch('http://localhost:5000/card'),
      },
      {
        path: '/btndetails/:id',
        element: <PrivateRoute><BtnDetails></BtnDetails> </PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/server/${params.id}`)
      },

      {
        path: '/productinfo',
        element: <ProductInfo></ProductInfo>,
        loader: () => fetch('http://localhost:5000/product'),
        
      },
      {
        path:'/update/:id',
        element: <PrivateRoute><Update></Update></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/product/${params.id}`)
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/registration',
        element:<Registration></Registration>,
      },
      {
        path: '/users',
        element: <PrivateRoute><Users></Users></PrivateRoute>,
        loader: () => fetch('http://localhost:5000/user')
      }
    
    ]
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
