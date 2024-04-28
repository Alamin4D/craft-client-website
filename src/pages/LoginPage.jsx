import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SocialLogin from "../components/SocialLogin/SocialLogin";
import UseAuth from "../hooks/UseAuth";
import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";


const LoginPage = () => {
    const { signInUser } = UseAuth();
    const [showPassword, setShowPassword] = useState(false);

    const { register, handleSubmit, formState: { errors } } = useForm();


    // navigation systems
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state || "/";

    // handle register 
    const onSubmit = data => {
        const {email, password} = data;
        signInUser(email, password)
        .then(result => {
            if (result.user) {
              navigate(from)
              toast.success('User Created Sucessfully')
            }
          })
        .catch(error => {
            console.log(error);
        })
    }

    return (
        <div>
            <div className="">
                <h2 className="text-3xl font-semibold my-8 text-center">Login your account</h2>
                <div className="card-body bg-[#F3F3F3] lg:w-[30%] mx-auto">
                    <form onSubmit={handleSubmit(onSubmit)} className="w-full mx-auto">
                        <div className="form-control">
                            <label className="label">
                                <span className="text-xl font-semibold">Email address</span>
                            </label>
                            <input type="email" placeholder="Enter your email address" className="input input-bordered bg-[#F3F3F3]" {...register("email", { required: true })} />
                            {errors.email && <span className="text-base font-medium text-red-700 mt-4">This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="text-xl font-semibold text-[#403F3F]">Password</span>
                            </label>
                            <div className="mb-4 relative">
                                <input type={showPassword ? "text" : "password"} placeholder="Enter your password" className="input input-bordered bg-[#F3F3F3] mb-4 w-full"{...register("password", { required: true })} />
                                <span className="absolute top-4 right-2" onClick={() => setShowPassword(!showPassword)}>
                                    {
                                        showPassword ? <FaRegEyeSlash></FaRegEyeSlash> : <FaRegEye></FaRegEye>
                                    }
                                </span>
                            </div>
                            {errors.password && <span className="text-base font-medium text-red-700 mt-3">This field is required</span>}
                        </div>
                        <div className="form-control mt-1">
                            <button className="btn bg-yellow-700 text-white">Login</button>
                        </div>
                    </form>
                    <p className="text-center text-base font-semibold text-[#706F6F] mt-4">Dont’t Have An Account ? <Link className="text-red-500 text-base font-semibold" to="/registerPage">Register</Link></p>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;