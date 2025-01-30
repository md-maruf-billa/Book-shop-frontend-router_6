import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Views/Home/Home";
import Login from "../Pages/Views/Auth/Login";
import Register from "../Pages/Views/Auth/Register";
import AdminOverview from "../Pages/Dashboards/Admin/AdminOverview";
import AddNewBook from "../Pages/Dashboards/Admin/AddNewBook";
import Allbooks from "../Pages/Views/AllBooks/Allbooks";
import BookDetails from "../Pages/Views/BookDetails/BookDetails";
import Error from "../Pages/Views/Error";
import VerifyOrder from "../Pages/Views/Orders/VerifyOrder";
import ViewAllOrder from "../Pages/Views/Orders/ViewAllOrder";
import Auth from "../Pages/Views/Auth/Auth";

const MainRouter = createBrowserRouter([
      {
            path: "/",
            element: <MainLayout />,
            errorElement: <Error />,
            children: [
                  {
                        index: true,
                        element: <Home />
                  },
                  {
                        path: "books",
                        element: <Allbooks />
                  },
                  {
                        path: "book-details/:bookId",
                        element: <BookDetails />
                  },
                  {
                        path: "verify-order",
                        element: <VerifyOrder />
                  },
                  {
                        path: "orders",
                        element: <Auth><ViewAllOrder /></Auth>
                  }
            ]

      },
      {
            path: "/admin",
            element: <MainLayout />,
            errorElement: <Error />,
            children: [
                  {
                        index: true,
                        element: <AdminOverview />
                  },
                  {
                        path: "add-book",
                        element: <AddNewBook />
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