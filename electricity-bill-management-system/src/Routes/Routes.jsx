import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
  export const router = createBrowserRouter([
    {
      path: "/",
      element: <h1>ADBMS Lab Project IIT Dhanbad</h1>,
    },
  ]);
  
  const Routes = () => {
    return <RouterProvider router={router} />;
  };
  
  export default Routes;