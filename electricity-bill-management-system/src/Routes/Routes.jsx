import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Navigate } from "react-router-dom";
import Login from "../components/Login/Login";
import Signup from "../components/SignUp/SignUp";
import Dashboard from "../components/Dashboard/Dashboard";
import Main from "../Layout/Main/Main";
import ResetPassword from "../components/ResetPassword/ResetPassword";
import Home from "../Layout/Home/Home";
import { H1Icon } from "@heroicons/react/24/outline";
import SignUp from "../components/SignUp/SignUp";
import { LogIn } from "lucide-react";
import Analytics from "../components/Analytics";
import Feedback from "../components/Feedback";
import Notification from "../components/Notification";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    // children: [
    //   {
    //     path: "/",
    //     element: <Navigate to="/login"></Navigate>,
    //   },
    //   {
    //     path: "login",
    //     element: <Login></Login>,
    //   },
    //   {
    //     path: "signup",
    //     element: <Signup></Signup>,
    //   },
    //   {
    //     path: "dashboard",
    //     element: <Dashboard></Dashboard>,
    //   },
    //   {
    //     path: "resetpassword",
    //     element: <ResetPassword></ResetPassword>,
    //   },
    // ],
  },
  {path:"signup",
  element:<SignUp></SignUp>,},
  {path:"login",
  element:<Login></Login>,},
  {
    path:"dashboard",
    element:<Dashboard></Dashboard>
  },
  {
    path:"notification",
    element:<Notification></Notification>
  },
  {
    path:"analytics",
    element:<Analytics></Analytics>
  },
  {
    path:"feedback",
    element:<Feedback></Feedback>
  }
  // {
  //   path: "home",
  //   element: <h1></h1>,
  //   children: [
  //     {
  //       path: "dashboard",
  //       element: <Dashboard></Dashboard>,
  //     },
  //   ],
  // },
]);

const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
