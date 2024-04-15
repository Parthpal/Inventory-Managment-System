import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout/MainLayout";
import Home from "../pages/Home/Home";
import ErrorPage from "../../ErrorPage";


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
  ]);
  export default MainRoute;