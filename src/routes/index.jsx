import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "../layouts/DefaultLayout";
import LoginLayout from "../layouts/LoginLayout";
// Pages
import ErrorPage from "../pages/Error/error-page";
import Home from "../pages/Home";
import Expense from "../pages/Expense";
import Revenu from "../pages/Revenu";
import Login from "../pages/Login";
import Register from "../pages/Register";

const PublicRoutes = createBrowserRouter([
  {
    element: <DefaultLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/expense",
        element: <Expense />,
      },
      {
        path: "/revenu",
        element: <Revenu />,
      },
    ],
  },
  {
    element: <LoginLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);
const PrivateRoutes = [];

export { PublicRoutes, PrivateRoutes };
