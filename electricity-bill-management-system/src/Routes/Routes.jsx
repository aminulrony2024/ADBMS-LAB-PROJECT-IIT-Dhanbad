import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../Layout/Home/Home";
import { Navigate } from "react-router-dom";
import Login from "../components/Login/Login";
import Signup from "../components/SignUp/SignUp";
import Dashboard from "../components/Dashboard/Dashboard";
import Main from "../Layout/Main/Main";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children :[
      {
        path : "/",
        element : <Navigate to="/signup"></Navigate>
      },
      {
        path : 'login',
        element : <Login></Login>
      },
      {
        path: 'signup',
        element : <Signup></Signup>
      },
      {
        path: 'dashboard',
        element : <Dashboard></Dashboard>
      },
    ]
  },
]);

const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
