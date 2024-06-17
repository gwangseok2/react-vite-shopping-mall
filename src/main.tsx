import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app.tsx";
import { BrowserRouter, useRoutes } from "react-router-dom";
import { routes } from "./routes";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
