import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Views/Home/Home";
import Login from "../Pages/Views/Auth/Login";
import Register from "../Pages/Views/Auth/Register";

const MainRouter = createBrowserRouter([
      {
            path: "/",
            element: <MainLayout />,
            children: [
                  {
                        index: true,
                        element: <Home />
                  }
            ]

      },
      {
            path: "/login",
            element: <Login />
      },
      {
            path: "/register",
            element: <Register />
      }
])

export default MainRouter;