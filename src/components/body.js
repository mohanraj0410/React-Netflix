import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './login';
import Browser from './browser';

const Body = () => {
  let appRouter=createBrowserRouter([
    {
      path:"/",
      element:<Login/>
    },
    {
      path:"/browser",
      element:<Browser/>
    }
  ])

  return (
    <RouterProvider router={appRouter} />
  )
}

export default Body;