import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "../layouts/DefaultLayout";
// Pages
import ErrorPage from "../pages/Error/error-page";
import Home from "../pages/Home";

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
        path: "/nin",
        element: <div>Trang Nin</div>,
      },
    ],
  },
]);
const PrivateRoutes = [];

export { PublicRoutes, PrivateRoutes };
