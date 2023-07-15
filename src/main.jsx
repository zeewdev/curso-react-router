import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createHashRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import BlogDetails from "./pages/BlogDetails";
import BlogCreate from "./pages/BlogCreate";

const router =  createHashRouter([
  {
    path: '',
    element: <Home/>
  },
  {
    path: '/blogs',
    element: <Blogs/>
  },
  {
    path: '/blog/:id',
    element: <BlogDetails/>
  },
  {
    path: '/create',
    element: <BlogCreate/>
  },
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
