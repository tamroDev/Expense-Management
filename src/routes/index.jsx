import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "../layouts/DefaultLayout";
import LoginLayout from "../layouts/LoginLayout";
import ProtecredRoute from "./ProtectedRoute/ProtectedRoute ";
import RedirectIfLoggedIn from "./RedirectIfLoggedIn/RedirectIfLoggedIn";
// Pages
import ErrorPage from "../pages/Error/error-page";
import Home from "../pages/Home";
import Expense from "../pages/Expense";
import Revenu from "../pages/Revenu";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Statistics from "../pages/Statistics";
import FinancialReport from "../pages/report";
import UserProfile from "../pages/Profile";

const PublicRoutes = createBrowserRouter([
  {
    element: <DefaultLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <ProtecredRoute element={<Home />} />,
      },
      {
        path: "/expense",
        element: <ProtecredRoute element={<Expense />} />,
      },
      {
        path: "/revenu",
        element: <ProtecredRoute element={<Revenu />} />,
      },
      {
        path: "/statistics",
        element: <ProtecredRoute element={<Statistics />} />,
      },
      {
        path: "/report",
        element: <ProtecredRoute element={<FinancialReport />} />,
      },
      {
        path: "/profile",
        element: <ProtecredRoute element={<UserProfile />} />,
      },
    ],
  },
  {
    element: <LoginLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/login",
        element: <RedirectIfLoggedIn element={<Login />} />,
      },
      {
        path: "/register",
        element: <RedirectIfLoggedIn element={<Register />} />,
      },
    ],
  },
]);

export { PublicRoutes };
