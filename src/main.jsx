import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { PublicRoutes } from "./routes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={PublicRoutes} />
  </Provider>
);
