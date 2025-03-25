import { StrictMode } from "react";
import "./index.css";
import { createRoot } from "react-dom/client";
import { router } from "./Routes/Routes.jsx";
import { RouterProvider } from "react-router-dom";
import AuthProvider from "./providers/AuthProvider.jsx";
import { ThemeProvider } from "./components/context/ThemeContext.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
    <ThemeProvider>
      <div>
        <RouterProvider router={router} />
      </div>
      </ThemeProvider>
    </AuthProvider>
  </StrictMode>
);
