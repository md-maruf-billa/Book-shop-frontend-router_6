import { Outlet } from "react-router";
import Navbar from "../Components/Navbar";

const MainLayout = () => {
      return (
            <div className="container mx-auto font-inter">
                  <Navbar />
                  <Outlet />
            </div>
      );
};

export default MainLayout;