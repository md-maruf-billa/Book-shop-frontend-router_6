import { Button } from '@/components/ui/button';
import { Link } from 'react-router';
import logo from "@/assets/logo.png"

const Register = () => {
      return (
            <div className="register">
                  <div className="border w-[400px] p-8 rounded-lg  backdrop-blur-md bg-brandPrimary/40">
                        <div className="flex justify-center items-center mb-4"><img src={logo} alt="" /></div>
                        <h1 className="text-3xl text-center font-bold text-brandTextSecondary">WELLCOM & REGISTER </h1>
                        <form >

                              <div className="mt-8">
                                    <label htmlFor="name" className="font-semibold tracking-[4px] text-brandTextTertiary">NAME</label>
                                    <input placeholder='Ex: Abu-Mahid Islam' type="text" id="name" className="w-full border border-brandTextSecondary p-2 rounded-lg bg-transparent outline-none mt-2" />
                              </div>
                              <div className="mt-4">
                                    <label htmlFor="email" className="font-semibold tracking-[4px] text-brandTextTertiary">EMAIL</label>
                                    <input placeholder='Ex: mahid@example.com' type="email" id="email" className="w-full border border-brandTextSecondary p-2 rounded-lg bg-transparent outline-none mt-2" />
                              </div>

                              <div className="mt-4">
                                    <label htmlFor="password" className="font-semibold tracking-[4px] text-brandTextTertiary">PASSWORD</label>
                                    <input placeholder='Ex: ******' type="password" id="password" className="w-full border border-brandTextSecondary p-2 rounded-lg bg-transparent outline-none mt-2" />
                              </div>

                              <Button type="submit" className="w-full mt-8 bg-brandTextSecondary hover:bg-brandTextSecondary/70">Register Now</Button>

                              <div className="mt-4">
                                    <p className="text-center text-brandTextTertiary">Have an account? <Link to="/login" className="text-[#510039] font-semibold">Login now</Link></p>
                              </div>
                        </form>
                  </div>
            </div>
      );
};

export default Register;