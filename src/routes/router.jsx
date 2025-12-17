import { createBrowserRouter } from "react-router";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import AuthLayout from "../layouts/AuthLayout";
import DashboardLayout from "../layouts/DashboardLayout";
import Home from "../pages/Home/Home";
import PrivateRouter from "../private/PrivateRouter";
import Dashboard from "../pages/dashbord/Dashboard";
import ErrorPage from "../pages/ErrorPage";
import LoadingSpinner from "../shared/LoadingSpinner";
import AllUsers from "../pages/dashbord/users/AllUsers";
import AdminRouter from "../private/AdminRouter";
import AllScholarships from "../pages/Home/AllScholarships/AllScholarships";
import AddScholarship from "../pages/dashbord/shcolarship/AddScholarship";
import ManageScholarships from "../pages/dashbord/shcolarship/ManageScholarships";
import ScholarshipDetails from "../pages/dashbord/shcolarship/ScholarshipDetails";
import axios from "axios";
import MainLayout from "../layouts/MainLayout";
import ModeratorRouter from "../private/ModeratorRouter";
import MyApplications from "../pages/dashbord/applications/MyApplications";
import ManageApplications from "../pages/dashbord/applications/ManageApplications";
import Payment from "../pages/dashbord/paymenet/Payment";
import AllReviews from "../pages/dashbord/reviews/AllReviews";
import MyReviews from "../pages/dashbord/reviews/MyReviews";
import Profile from "../pages/dashbord/dashboardHome/profile/Profile";
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
      { path: "myApplications", Component: MyApplications },
      { path: "payment/:applyId", Component: Payment },
      { path: "myReviews", Component: MyReviews },
      // adminRouter
      { path: "all/users", element: <AdminRouter><AllUsers /></AdminRouter> },
      { path: "admin/profile", element: <AdminRouter><Profile /></AdminRouter> },
      { path: "shcolarship", element: <AdminRouter><AddScholarship /></AdminRouter> },
      { path: "manage/scholarships", element: <AdminRouter><ManageScholarships /></AdminRouter> },
      // moderator Router
      { path: "manage/applications", element: <ModeratorRouter><ManageApplications /></ModeratorRouter> },
      { path: "moderator/profile", element: <ModeratorRouter><Profile /></ModeratorRouter> },
      { path: "all/reviews", element: <ModeratorRouter><AllReviews /></ModeratorRouter> },
    ],
  },
]);
