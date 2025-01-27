import logo from '@/assets/logo.png'
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { GoSearch } from "react-icons/go";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { CiHeart } from "react-icons/ci";
import { IoIosLogIn } from "react-icons/io";
import { Link } from 'react-router';
import { useAppSelector } from '@/App/Redux/hook';
import { selectUser } from '@/App/Redux/features/user/user.slice';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
      FilePlus,
      FolderKanban,
      History,
      LogOut,
      Settings,
      User,
} from "lucide-react"

import {
      DropdownMenu,
      DropdownMenuContent,
      DropdownMenuGroup,
      DropdownMenuItem,
      DropdownMenuLabel,
      DropdownMenuSeparator,
      DropdownMenuShortcut,
      DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


const NavbarMiddle = () => {
      const user = useAppSelector(selectUser);
      console.log(user)



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
                        {
                              user?.email ?

                                    <DropdownMenu>
                                          <DropdownMenuTrigger asChild>
                                                <Avatar>
                                                      <AvatarImage src={user?.profileImage} />
                                                      <AvatarFallback>{user.name[0]}</AvatarFallback>
                                                </Avatar>
                                                {/* <Button variant="outline">Open</Button> */}
                                          </DropdownMenuTrigger>
                                          <DropdownMenuContent className="w-56 ">
                                                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                                <DropdownMenuSeparator />
                                                {
                                                      user?.role == "admin" ?
                                                            <DropdownMenuGroup className='space-y-2'>
                                                                  <DropdownMenuItem onClick={() => console.log("hello")}>
                                                                        <User />
                                                                        <span>Manage Users</span>
                                                                  </DropdownMenuItem>
                                                                  <Link to="/admin/add-book">
                                                                        <DropdownMenuItem>
                                                                              <FilePlus />
                                                                              <span>Add New Book</span>
                                                                        </DropdownMenuItem>
                                                                  </Link>

                                                                  <DropdownMenuItem>
                                                                        <FolderKanban />
                                                                        <span>Manage Books</span>
                                                                  </DropdownMenuItem>
                                                                  <DropdownMenuItem>
                                                                        <History />
                                                                        <span>Manage Orders</span>
                                                                  </DropdownMenuItem>
                                                                  <DropdownMenuItem>
                                                                        <Settings />
                                                                        <span>Profile Settings</span>
                                                                  </DropdownMenuItem>
                                                            </DropdownMenuGroup>
                                                            : <DropdownMenuGroup>
                                                                  <DropdownMenuItem onClick={() => console.log("hello")}>
                                                                        <User />
                                                                        <span>Profile Setting</span>
                                                                  </DropdownMenuItem>
                                                                  <DropdownMenuItem>
                                                                        <History />
                                                                        <span>Order History</span>
                                                                  </DropdownMenuItem>
                                                            </DropdownMenuGroup>
                                                }

                                                <DropdownMenuSeparator />
                                                <DropdownMenuItem>
                                                      <LogOut />
                                                      <span>Log out</span>
                                                      <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                                                </DropdownMenuItem>
                                          </DropdownMenuContent>
                                    </DropdownMenu> :
                                    <Link to="/login">
                                          <Button className='bg-brandTextTertiary hover:bg-brandTextTertiary/70 text-white text-base'>
                                                <IoIosLogIn />
                                                Login
                                          </Button>
                                    </Link>
                        }
                  </div>
            </div>
      );
};

export default NavbarMiddle;