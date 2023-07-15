import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createHashRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import BlogDetails from "./pages/BlogDetails";
import BlogCreate from "./pages/BlogCreate";
import Error from "./pages/Error";

const router = createHashRouter([
  {
    path: "",
    element: <Home />,
  },
  {
    path: "/blogs",
    element: <Blogs />,
    loader: async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();
      return data;
    },
  },
  {
    path: "/blog/:id",
    element: <BlogDetails />,
    loader: async ({ params }) => {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${params.id}`
      );
      const data = await res.json();
      return data;
    },
  },
  {
    path: "/create",
    element: <BlogCreate />,
    action: async ({ params, request, context }) => {
      const form = await request.formData()
      const res = Object.fromEntries(form)

      console.log(res);
      return true;
    },
  },
  {
    path: "*",
    element: <Error />,
    errorElement: <Error />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
