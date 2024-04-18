import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout/MainLayout";
import Home from "../pages/Home/Home";
import ErrorPage from "../../ErrorPage";
import DashboardLayout from "../Layouts/DashboardLayout/DashboardLayout";


const MainRoute = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      errorElement: <ErrorPage/>,
    children: [
        {
        path: "/",
        element: <Home/>
        },
    ],
    },
    {
      path: "/dashboard",
      element: <DashboardLayout/>,
      errorElement: <ErrorPage/>,
    children: [
    ],
    }
  ]);
  export default MainRoute;