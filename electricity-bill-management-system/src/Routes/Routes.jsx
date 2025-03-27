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
import AdminDashboard from "../components/Admin/AdminDashboard";
import Bills from "../components/Admin/Bills";
import NewConnection from "../components/Admin/NewConnection";
import Complaints from "../components/Admin/Complaints";
import CustomerDetails from "../components/Admin/CustomerDetails";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
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
  },
  {
    path:"admin-dashboard",
    element:<AdminDashboard></AdminDashboard>
  },
  {
    path:"admin-bill",
    element:<Bills></Bills>
  },
  {
    path:"admin-complaints",
    element:<Complaints></Complaints>
  },
  {
    path:"customer-details",
    element:<CustomerDetails></CustomerDetails>
  },
  {
    path:"new-connection",
    element:<NewConnection></NewConnection>
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
