import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import Home from "./screens/Home.jsx";
import Login from "./screens/SignUp.jsx";
import SignIn from "./screens/SignIn.jsx";
import { TokenProvider } from "./context/storeContext.jsx";
import UserContent from "./screens/UserContent.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/signup",
    element: <Login />,
  },
  {
    path: "/signin",
    element: <SignIn></SignIn>,
  },
  {
    path: "/userContent",
    element: <UserContent></UserContent>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TokenProvider>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </TokenProvider>
  </React.StrictMode>
);
