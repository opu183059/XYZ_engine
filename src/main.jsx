import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Result from "./components/pages/Result.jsx";
import Authprovider from "./components/provider/Authprovider.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "/result",
    element: <Result></Result>,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <Authprovider>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Authprovider>
);
