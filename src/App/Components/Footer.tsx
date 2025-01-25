import logo from "@/assets/logo.png";
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { Link } from "react-router";
const Footer = () => {
      const year = new Date().getFullYear();
      return (
            <footer className=" footer-background mt-24 p-20">
                  <div className="flex justify-between">
                        {/* start */}
                        <div>
                              <div><img src={logo} alt="" /></div>
                              <h1 className="text-2xl font-semibold text-brandSelect my-3">Mahid Book's</h1>
                              <p className="text-brandTextSecondary">
                                    Nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                              </p>
                              <div className="flex items-center gap-10 mt-5">
                                    <FaFacebook className="text-3xl text-brandSelect" />
                                    <FaLinkedin className="text-3xl text-brandSelect" />
                                    <FaTwitter className="text-3xl text-brandSelect" />
                                    <IoLogoYoutube className="text-3xl text-brandSelect" />
                              </div>

                        </div>

                        {/* middle */}
                        <div>
                              <h2 className="text-brandSelect text-xl font-semibold">LINKS</h2>
                              <div className="space-y-3 mt-4">
                                    <p>Home</p>
                                    <p>About</p>
                                    <p>Services</p>
                                    <p>Products</p>
                                    <p>Contact</p>
                              </div>

                        </div>

                        {/* end */}
                        <div>
                              <h2 className="text-brandSelect text-xl font-semibold">LATEST PROJECT</h2>
                        </div>
                  </div>

                  <div className="flex justify-between items-center mt-20">
                        <p>© {year} Abu-mahid. All Rights Reserved.</p>
                        <p> Privacy | <Link to="/terms" className="text-brandSelect">Terms of Service</Link></p>
                  </div>
            </footer>
      );
};

export default Footer;