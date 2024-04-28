import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UseAuth from "../hooks/UseAuth";



const RegisterPage = () => {
    const { createUser } = UseAuth();
    const [showPassword, setShowPassword] = useState(false);


    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        const { email, password } = data;
        console.log(email, password)


        if(password.length < 6){
            toast.error('password should be at least 6 characters or longer');
            return;
        }
        else if(!/[A-Z]/.test(password)){
            toast.error('Your Password should have at least one uppercase characters.')
            return;
        }
        else if(!/[a-z]/.test(password)){
            toast.error('Your Password should have at least one lowercase characters.')
            return;
        }

        // create user update profile
        createUser(email, password)
        .then(() => {
            toast.success('User Created Sucessfully')
          })
            .catch( () => {
                toast.error('Already in use');
            })
    }

    return (
        <div>
            <div className="">
                <h2 className="text-3xl font-semibold text-center my-8">Register your account</h2>
                <div className="card-body bg-[#F3F3F3] lg:w-[30%] mx-auto">
                    <form onSubmit={handleSubmit(onSubmit)}className="w-full mx-auto">
                        <div className="form-control">
                            <label className="label">
                                <span className="text-xl font-semibold text-[#403F3F]">Your Name</span>
                            </label>
                            <input type="text" placeholder="Enter your name" className="input input-bordered bg-[#F3F3F3]" {...register("yourName", { required: true })} />
                            {errors.yourName && <span className="text-base font-medium text-red-700 mt-3">This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="text-xl font-semibold text-[#403F3F]">Photo URL</span>
                            </label>
                            <input type="text" placeholder="Enter your password" className="input input-bordered bg-[#F3F3F3]" {...register("photo")} />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="text-xl font-semibold text-[#403F3F]">Email address</span>
                            </label>
                            <input type="email" placeholder="Enter your email address" className="input input-bordered bg-[#F3F3F3]" {...register("email", { required: true })} />
                            {errors.email && <span className="text-base font-medium text-red-700 mt-3">This field is required</span>}
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
                            <button type="submit" className="btn bg-yellow-700 text-white">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;