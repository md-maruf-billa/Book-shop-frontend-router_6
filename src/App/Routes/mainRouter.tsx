import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Views/Home";

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

      }
])

export default MainRouter;