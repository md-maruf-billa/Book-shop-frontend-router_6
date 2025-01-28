import { Button } from "@/components/ui/button";
import NavbarMiddle from "./Navbar/NavbarMiddle";
import NavbarUpper from "./Navbar/NavbarUpper";
import { NavLink } from "react-router";


const Navbar = () => {
      return (
            <div>
                  <NavbarUpper />
                  <NavbarMiddle />

                  {/* Main nav */}
                  <div className="bg-[#173F5F] py-3 flex justify-center items-center">
                        <div className="flex items-center gap-0">
                              <Button className='bg-transparent text-[#D1D1D1] hover:bg-transparent text-base border-r px-8 border-[#d1d1d175] rounded-none'>
                                    <NavLink className="" to={"/"}>HOME</NavLink>
                              </Button>
                              <Button className='bg-transparent text-[#D1D1D1] hover:bg-transparent text-base border-r px-8 border-[#d1d1d175] rounded-none'>
                                    <NavLink to={"/books"}>BOOKS</NavLink>
                              </Button>
                              <Button className='bg-transparent text-[#D1D1D1] hover:bg-transparent text-base border-r px-8 border-[#d1d1d175] rounded-none'>
                                    <NavLink to={"/blogs"}>BLOG</NavLink>
                              </Button>
                              <Button className='bg-transparent text-[#D1D1D1] hover:bg-transparent text-base border-r px-8 border-[#d1d1d175] rounded-none'>
                                    <NavLink to={"/about-us"}>ABOUT US</NavLink>
                              </Button>
                              <Button className='bg-transparent text-[#D1D1D1] hover:bg-transparent text-base'>
                                    <NavLink to={"/contact-us"}>CONTACT US</NavLink>
                              </Button>
                        </div>
                  </div>

            </div>
      );
};

export default Navbar;