import { StrictMode } from 'react';
import "./index.css";
import { createRoot } from 'react-dom/client';
import {router} from "./Routes/Routes.jsx";
import {
  RouterProvider,
} from "react-router-dom";
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
