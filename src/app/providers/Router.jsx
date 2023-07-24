import React from "react";
import { Navigate, createBrowserRouter } from "react-router-dom";
import LayoutContent from "../../components/layouts/LayoutContent";
import AuthPages from "../../views/AuthPages";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutContent /> /* Default Layout */,
    children: [
      {
        path: "/dashboard",
        element: <Navigate to="/" />
      },
      {
        path: "/",
        element: <AuthPages />
      }
    ]
  },
  {
    path: "/",
    element: <LayoutContent /> /* Default Layout */,
    children: [
      {
        path: "example",
        element: <AuthPages />
      }
    ]
  }
]);

export default Router;
