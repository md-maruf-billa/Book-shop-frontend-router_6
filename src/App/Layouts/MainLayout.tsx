import { Outlet } from "react-router";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const MainLayout = () => {
      return (
            <div className="container mx-auto font-inter px-4">
                  <Navbar />
                  <Outlet />
                  <Footer />
            </div>
      );
};

export default MainLayout;