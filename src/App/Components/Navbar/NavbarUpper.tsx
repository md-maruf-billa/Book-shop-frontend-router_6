
import { IoCall } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa6";
import { RxInstagramLogo } from "react-icons/rx";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
const NavbarUpper = () => {
      return (
            <div className="flex justify-between items-center py-4 border-b border-brandPrimary px-10">
                  <div className="flex items-center gap-1 ">
                        <IoCall />
                        <h3 className="font-semibold">+880 xxxxxxxxxx</h3>
                  </div>
                  <div className="flex items-center gap-6 ">
                        <FaFacebookF  className="cursor-pointer"/>
                        <RxInstagramLogo  className="cursor-pointer"/>
                        <FaLinkedinIn  className="cursor-pointer"/>
                        <FaTwitter  className="cursor-pointer"/>
                  </div>
            </div>
      );
};

export default NavbarUpper;