import { StrictMode } from "react";
import "./index.css";
import { createRoot } from "react-dom/client";
import { router } from "./Routes/Routes.jsx";
import { RouterProvider } from "react-router-dom";
import AuthProvider from "./providers/AuthProvider.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <div className="max-w-7xl mx-auto bg-[#eaeaea]">
        <RouterProvider router={router} />
      </div>
    </AuthProvider>
  </StrictMode>
);
