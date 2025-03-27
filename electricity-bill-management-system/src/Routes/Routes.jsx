import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Login from "../components/Login/Login";
import Home from "../Layout/Home/Home";
import SignUp from "../components/SignUp/SignUp";
import Analytics from "../components/Analytics";
import Feedback from "../components/Feedback";
import Notification from "../components/Notification";
import AdminDashboard from "../components/Admin/AdminDashboard";
import Bills from "../components/Admin/Bills";
import NewConnection from "../components/Admin/NewConnection";
import Complaints from "../components/Admin/Complaints";
import CustomerDetails from "../components/Admin/CustomerDetails";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";
import Dashboard from "../components/Dashboard/Dashboard"
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  { path: "signup", element: <SignUp></SignUp> },
  { path: "login", element: <Login></Login> },
  {
    path: "dashboard",
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
  },
  {
    path: "notification",
    element: <PrivateRoute><Notification></Notification></PrivateRoute>,
  },
  {
    path: "analytics",
    element: <PrivateRoute><Analytics></Analytics></PrivateRoute>,
  },
  {
    path: "feedback",
    element: <PrivateRoute><Feedback></Feedback></PrivateRoute>,
  },
  {
    path: "admin-dashboard",
    element: <AdminRoute><AdminDashboard></AdminDashboard></AdminRoute>,
  },
  {
    path: "admin-bill",
    element: <AdminRoute><Bills></Bills></AdminRoute>,
  },
  {
    path: "admin-complaints",
    element: <AdminRoute><Complaints></Complaints></AdminRoute>,
  },
  {
    path: "customer-details",
    element: <AdminRoute><CustomerDetails></CustomerDetails></AdminRoute>,
  },
  {
    path: "new-connection",
    element: <AdminRoute><NewConnection></NewConnection></AdminRoute>,
  },
]);

const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
