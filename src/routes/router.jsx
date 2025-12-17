import { createBrowserRouter } from "react-router";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import AllUsers from "../pages/dashbord/users/AllUsers";
import AuthLayout from "../layouts/AuthLayout";
import DashboardLayout from "../layouts/DashboardLayout";
import Home from "../pages/Home/Home";
import PrivateRouter from "../private/PrivateRouter";
import Dashboard from "../pages/dashbord/Dashboard";
import ErrorPage from "../pages/ErrorPage";
import LoadingSpinner from "../shared/LoadingSpinner";
import AdminRouter from "../private/AdminRouter";
import AllScholarships from "../pages/Home/AllScholarships/AllScholarships";
import AddScholarship from "../pages/dashbord/shcolarship/AddScholarship";
import ScholarshipDetails from "../pages/dashbord/shcolarship/ScholarshipDetails";
import ManageScholarships from "../pages/dashbord/shcolarship/ManageScholarships";
import axios from "axios";
import MainLayout from "../layouts/MainLayout";
export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <ErrorPage />,
    hydrateFallbackElement: <LoadingSpinner />,
    children: [
      { index: true, Component: Home, loader: () => axios.get("/scholarships.json")},
      {
        path: "all/scholarships",
        element: (
          <PrivateRouter>
            <AllScholarships />
          </PrivateRouter>
        ),
      },
           { path: "view/details/:id", element: <PrivateRouter><ScholarshipDetails /></PrivateRouter>},
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
  {
    path: "dashboard",
    element: <PrivateRouter><DashboardLayout /></PrivateRouter>,
    children: [
      { index: true, Component: Dashboard  },
      // adminRouter
      { path: "all/users", element: <AdminRouter><AllUsers /></AdminRouter> },
      { path: "shcolarship", element: <AdminRouter><AddScholarship /></AdminRouter> },
      { path: "manage/scholarships", element: <AdminRouter><ManageScholarships /></AdminRouter> },
     
    ],
  },
]);
