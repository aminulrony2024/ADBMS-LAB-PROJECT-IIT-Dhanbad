import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Main from "../components/Main";
  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>
    },
  ]);
  
  const Routes = () => {
    return <RouterProvider router={router} />;
  };
  
  export default Routes;