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
import UserProfileSetting from "../Pages/Dashboards/User/UserProfileSetting";
import AllUsers from "../Pages/Dashboards/Admin/AllUsers";
import ManageOrder from "../Pages/Dashboards/Admin/ManageOrder";
import AboutUs from "../Pages/Views/AboutUs/AboutUs";
import ManageBook from "../Pages/Dashboards/Admin/ManageBook";

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
                        element: <Auth access="user"><VerifyOrder /></Auth>
                  },
                  {
                        path: "orders",
                        element: <Auth access="user"><ViewAllOrder /></Auth>
                  },
                  {
                        path: "profile-settting",
                        element: <Auth access="user"><UserProfileSetting /></Auth>
                  },
                  {
                        path: "about-us",
                        element: <AboutUs />
                  }
            ]

      },
      {
            path: "/admin",
            element: <Auth access="admin"> <MainLayout /></Auth>,
            errorElement: <Error />,
            children: [
                  {
                        index: true,
                        element: <AdminOverview />
                  },
                  {
                        path: "add-book",
                        element: <AddNewBook />
                  },
                  {
                        path: "all-users",
                        element: <AllUsers />
                  },
                  {
                        path: "manage-orders",
                        element: <ManageOrder />
                  },
                  {
                        path: "manage-books",
                        element: <ManageBook />
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