import { createBrowserRouter } from "react-router-dom";
import OrderComponent from "./components/Order";
import ReportComponent from "./components/Reports";
const router = createBrowserRouter([
  {
    path: "/",
    element: <OrderComponent />,
  },
  { path: "/", element: <ReportComponent /> },
]);

export default router;
