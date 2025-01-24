import logo from '@/assets/logo.png'
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { GoSearch } from "react-icons/go";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { CiHeart } from "react-icons/ci";
import { IoIosLogIn } from "react-icons/io";

const NavbarMiddle = () => {
      return (
            <div className='flex items-center justify-between py-2'>
                  {/* nav start */}
                  <div>
                        <img className='w-3/4' src={logo} alt="" />
                  </div>

                  {/* nav middle */}
                  <div className='relative w-1/3'>
                        <Input placeholder='Search books' className='rounded-full bg-brandSecondary' />
                        <GoSearch className='absolute right-3 top-1/2 -translate-y-1/2 ' />
                  </div>

                  {/* nav end */}
                  <div className='flex items-end gap-4'>
                        <Button className='bg-transparent text-brandTextPrimary hover:bg-transparent text-base border-r-2 rounded-none'>
                              <HiOutlineShoppingBag />
                              CRAT: ({0})
                        </Button>
                        <Button className='bg-transparent text-brandTextPrimary hover:bg-transparent text-base border-r-2 rounded-none'>
                              <CiHeart />
                              WISHLIST
                        </Button>
                        <Button className='bg-brandSelect hover:bg-brandSelect/70 text-white text-base'>
                              <IoIosLogIn />
                              Login
                        </Button>
                  </div>
            </div>
      );
};

export default NavbarMiddle;