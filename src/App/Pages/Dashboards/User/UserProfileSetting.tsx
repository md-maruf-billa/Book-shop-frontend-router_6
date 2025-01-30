import { useUpdatePasswordMutation, useUpdateProfileMutation } from "@/App/Redux/features/user/user.api";
import { selectToken, selectUser, setUser } from "@/App/Redux/features/user/user.slice";
import { useAppDispatch, useAppSelector } from "@/App/Redux/hook";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { TResponse } from "@/Types";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
const UserProfileSetting = () => {
      const dispatch = useAppDispatch();
      const user = useAppSelector(selectUser);
      const token = useAppSelector(selectToken)
      const { register, handleSubmit } = useForm();
      const [updateProfile] = useUpdateProfileMutation();
      const [updatePassword] = useUpdatePasswordMutation()

      const handleUpdateProfile: SubmitHandler<FieldValues> = async (data) => {
            const toastId = toast.loading("Profile updating.......")
            const formData = new FormData();
            formData.append("image", data.profileImage[0]);
            const payload = {
                  email: user?.email,
                  name: data.name,
                  address: data.address,
                  profileImage: formData,
            }
            formData.append("data", JSON.stringify(payload));
            const res = await updateProfile(formData);
            if (res.data?.success) {
                  toast.success("Update successfull", { id: toastId })
                  dispatch(setUser({ user: res?.data?.data, token: token }));
            } else {
                  toast.error("Something went wrong!! ", { id: toastId })
            }
      }

      const handleUpdatePassword: SubmitHandler<FieldValues> = async (data) => {
            const toastId = toast.loading("Password updating.......")
            data.preventDefault()
            const oldPassword = data.target.oldPassword.value;
            const newPassword = data.target.oldPassword.value;
            const payload = {
                  oldPassword,
                  newPassword
            }
            const res = await updatePassword(payload) as TResponse;
            if (res.data?.success) {
                  toast.success("Update successfull", { id: toastId })
                  dispatch(setUser({ user: res?.data?.data, token: token }));
            } else {
                  toast.error(res?.error?.data?.message, { id: toastId })
            }
      }

      return (
            <div className="flex justify-center items-center mt-20  p-4">
                  <div className="relative w-full max-w-md border rounded-2xl p-6 text-center">
                        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-24 h-24 overflow-hidden rounded-full border-4 border-white shadow-lg">
                              <img
                                    src={user?.profileImage}
                                    alt="User Profile"
                                    className="w-full h-full object-cover"
                              />
                        </div>
                        <div className="mt-12">
                              <h2 className="text-xl font-semibold text-brandTextPrimary">{user?.name}</h2>
                              <p className="text-gray-500">{user?.email}</p>
                              <p className="mt-2 text-sm text-gray-600">
                                    {user?.address}
                              </p>
                              <div className="mt-4 flex justify-center gap-6 text-gray-700">
                                    <div className="text-center">
                                          <span className="text-lg font-bold">--</span>
                                          <p className="text-sm">Total Order's</p>
                                    </div>
                                    <div className="text-center">
                                          <span className="text-lg font-bold">--</span>
                                          <p className="text-sm">Recived</p>
                                    </div>
                                    <div className="text-center">
                                          <span className="text-lg font-bold">--</span>
                                          <p className="text-sm">Canceled</p>
                                    </div>
                              </div>
                              <div className="flex items-center justify-center  gap-3 mt-10">

                                    <Popover>
                                          <PopoverTrigger asChild>
                                                <Button className=" bg-brandTextPrimary hover:bg-brandTextPrimary/60 text-white px-6 py-2 rounded-full">
                                                      Edit Profile
                                                </Button>
                                          </PopoverTrigger>
                                          <PopoverContent className="w-80">
                                                <form onSubmit={handleSubmit(handleUpdateProfile)} className="grid gap-4 ">
                                                      <div className="grid gap-2">
                                                            <label htmlFor="dropzone-file" className="flex flex-col items-center w-full max-w-lg p-5 mx-auto mt-2 text-center bg-white border-2 border-gray-300 border-dashed cursor-pointer dark:bg-gray-900 dark:border-gray-700 rounded-xl">
                                                                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 text-gray-500 dark:text-gray-400">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
                                                                  </svg>

                                                                  <h2 className="mt-1 font-medium tracking-wide text-gray-700 dark:text-gray-200">Change Photo</h2>

                                                                  <p className="mt-2 text-xs tracking-wide text-gray-500 dark:text-gray-400">Upload your file SVG, PNG, JPG or GIF. </p>

                                                                  <input {...register("profileImage")} id="dropzone-file" type="file" className="hidden" />
                                                            </label>
                                                      </div>
                                                      <div className="grid gap-2">
                                                            <div className="space-y-2">
                                                                  <Label htmlFor="name">Name</Label>
                                                                  <Input
                                                                        {...register("name")}
                                                                        id="name"
                                                                        defaultValue={user?.name}
                                                                        className="col-span-2 h-8"
                                                                  />
                                                            </div>
                                                            <div className="space-y-2">
                                                                  <Label htmlFor="address">Address</Label>
                                                                  <Input
                                                                        id="address"
                                                                        {...register("address")}
                                                                        defaultValue={user?.address}
                                                                        className="col-span-2 h-8"
                                                                  />
                                                            </div>
                                                            <div className="space-y-2">
                                                                  <Label htmlFor="phone">Phone</Label>
                                                                  <Input
                                                                        {...register("phone")}
                                                                        id="phone"
                                                                        defaultValue={user?.phone}
                                                                        className="col-span-2 h-8"
                                                                  />
                                                            </div>

                                                      </div>
                                                      <Button type="submit" className=" bg-brandTextPrimary hover:bg-brandTextPrimary/60 text-white px-6 py-2 rounded-full">
                                                            Update Now
                                                      </Button>
                                                </form>
                                          </PopoverContent>
                                    </Popover>
                                    <Popover>
                                          <PopoverTrigger asChild>
                                                <Button className=" bg-brandSelect hover:bg-brandSelect/60 text-white px-6 py-2 rounded-full">
                                                      Update Passowrd
                                                </Button>
                                          </PopoverTrigger>
                                          <PopoverContent className="w-80">
                                                <form onSubmit={handleUpdatePassword} className="grid gap-4">
                                                      <div className="space-y-2 text-center">
                                                            <h4 className="leading-none text-center text-brandTextPrimary text-xl font-semibold">Update Your Pssword</h4>

                                                      </div>

                                                      <div className="space-y-2">
                                                            <Label htmlFor="oldpass">Old Password</Label>
                                                            <Input
                                                                  name="oldPassword"
                                                                  id="oldpass"
                                                                  className="col-span-2 h-8"
                                                            />
                                                      </div>

                                                      <div className="space-y-2">
                                                            <Label htmlFor="newpass">New Password</Label>
                                                            <Input
                                                                  name="newPassword"
                                                                  id="newpass"
                                                                  className="col-span-2 h-8"
                                                            />
                                                      </div>
                                                      <Button type="submit" className=" bg-brandSelect hover:bg-brandSelect/60 text-white px-6 py-2 rounded-full">
                                                            Change Now
                                                      </Button>

                                                </form>
                                          </PopoverContent>
                                    </Popover>

                              </div>
                        </div>

                  </div>
            </div>
      );
};

export default UserProfileSetting;