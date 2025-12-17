import { createBrowserRouter } from "react-router";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import AuthLayout from "../layouts/AuthLayout";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage";
import LoadingSpinner from "../shared/LoadingSpinner";
import MainLayout from "../layouts/MainLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <ErrorPage />,
    hydrateFallbackElement: <LoadingSpinner />,
    children: [
      { index: true, Component: Home},
    ],
  },
  {
    path: "/",
    Component: AuthLayout,
    children: [
      { path: "register", Component: Register },
      { path: "login", Component: Login },
    ],
  },
]);
