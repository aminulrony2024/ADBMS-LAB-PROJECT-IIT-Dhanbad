import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../Layout/Home/Home";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
]);

const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
