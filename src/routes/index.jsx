import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "../layouts/DefaultLayout";
// Pages
import ErrorPage from "../pages/Error/error-page";
import Home from "../pages/Home";
import Expense from "../pages/Expense";

const PublicRoutes = createBrowserRouter([
  {
    path: "/",
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
    ],
  },
]);
const PrivateRoutes = [];

export { PublicRoutes, PrivateRoutes };
