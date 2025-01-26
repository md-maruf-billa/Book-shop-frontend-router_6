import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import logo from "@/assets/logo.png"
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useLoginMutation } from "@/App/Redux/features/user/user.api";
import { TResponse } from "@/Types";
import { toast } from "sonner";
import { useAppDispatch } from "@/App/Redux/hook";
import { setUser } from "@/App/Redux/features/user/user.slice";

const Login = () => {
      const dispatch = useAppDispatch()
      const [loginUser] = useLoginMutation();
      const { register, handleSubmit } = useForm();
      const handelLogin: SubmitHandler<FieldValues> = async (data) => {
            const toastId = toast.loading("Login ... please wait...");
            const payload = {
                  email: data.email,
                  password: data.password,
            }
            const res = await loginUser(payload) as TResponse;
            if (res.data?.success) {
                  console.log(res)
                  toast.success("Login successful ........!!",{id:toastId})
                  dispatch(setUser({ user:res.data?.data?.user, token: res.data?.data?.accessToken as string }));
            } else {
                toast.error("Something went wrong!! Please provide valid information",{id:toastId})
            }
      }

      return (
            <div className="login">
                  <div className="border w-[400px] p-8 rounded-lg  backdrop-blur-md bg-brandPrimary/40">
                        <div className="flex justify-center items-center mb-8"><img src={logo} alt="" /></div>
                        <h1 className="text-3xl text-center font-bold text-brandTextSecondary">WELLCOM & LOGIN </h1>
                        <form onSubmit={handleSubmit(handelLogin)}>

                              <div className="mt-8">
                                    <label htmlFor="email" className="font-semibold tracking-[4px] text-brandTextTertiary">EMAIL</label>
                                    <input {...register("email")} placeholder="Ex: mahid@example.com" type="email" id="email" className="w-full border border-brandTextSecondary p-2 rounded-lg bg-transparent outline-none mt-2 placeholder:text-gray-500" />
                              </div>

                              <div className="mt-4">
                                    <label htmlFor="password" className="font-semibold tracking-[4px] text-brandTextTertiary">PASSWORD</label>
                                    <input {...register("password")} placeholder="Ex: ********" type="password" id="current-password" className="w-full border border-brandTextSecondary p-2 rounded-lg bg-transparent outline-none mt-2 placeholder:text-gray-500" />
                              </div>

                              <Button type="submit" className="w-full mt-8 bg-brandTextSecondary hover:bg-brandTextSecondary/70">Login Now</Button>

                              <div className="mt-4">
                                    <p className="text-center text-brandTextTertiary">Don't have an account? <Link to="/register" className="text-[#510039] font-semibold">Register now</Link></p>
                              </div>
                        </form>
                  </div>
            </div>
      );
};

export default Login;