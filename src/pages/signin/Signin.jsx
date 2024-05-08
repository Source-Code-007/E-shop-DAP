import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useSignInWithEmailAndPasswordMutation } from "../../redux/api/authAPI";
import { toast } from "react-toastify";

const Signin = () => {
    const { authLoading, authInfo, authToken, authError, authSuccess } = useSelector(state => state.auth)

    const [isShowPass, setIsShowPass] = useState(false)

    const [signInWithEmailAndPassword, { isLoading, isSuccess, isError, error }] = useSignInWithEmailAndPasswordMutation();

    const navigate = useNavigate()
    const location = useLocation()
    const from = location?.state?.from?.pathname

    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm()
    const handleSigninFunc = async form => {
        const { email, password } = form

        console.log(email, password);



        try {
            await signInWithEmailAndPassword({ email, password});
            // await updateProfile({ name, photo:'https://www.freeiconspng.com/thumbs/computer-user-icon/computer-user-icon-2.png' }); // Assuming you want to update profile after sign up
          } catch (error) {
            toast.error(error.message || 'Something wrong to signin!', {
                position: "bottom-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
                });
            console.error('Error sign up:', error.message);
          }
    }

    return (
        <div className="bg-cover bg-center bg-[#0f1d22] bg-blend-overlay">
            <div className='min-h-screen w-5/6 md:w-3/6 xl:w-2/6 mx-auto flex items-center'>

                <div className="w-full p-10 bg-slate-700 bg-opacity-75 shadow rounded">
                    <form onSubmit={handleSubmit(handleSigninFunc)} className='space-y-3'>
                        <h2 className='font-bold text-3xl text-white mb-6'>Signin to your account</h2>

                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-slate-300 dark:text-white">email</label>
                            <input type='email' id='email' className='my-inp' {...register("email", {
                                required: 'This field is required', pattern: {
                                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                    message: "Please enter a valid email address"
                                }
                            })} placeholder='Your email here' />
                            {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                        </div>

                        <div className='relative'>
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-slate-300 dark:text-white">Password</label>
                            <input type={`${isShowPass ? 'text' : 'password'}`} id='password' className='my-inp' {...register("password", {
                                required: 'This field is required', pattern: {
                                    value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
                                    message: "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one digit."
                                }
                            })} placeholder='••••••••' />
                            <span className='absolute right-2 top-11 text-slate-300 cursor-pointer' onClick={() => setIsShowPass(!isShowPass)}> {isShowPass ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>} </span>
                            {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input id="remember" name='remember' aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" />
                                </div>
                                <div className="ml-3 text-sm">
                                    <label htmlFor="remember" className="text-slate-300">Remember me</label>
                                </div>
                            </div>
                            <a href="#" className="text-sm font-medium text-slate-300 hover:underline dark:text-primary-500">Forgot password?</a>
                        </div>

                        <button className='cmn-btn-one w-full' type='submit'>Signin</button>
                        <p className="text-sm font-light text-slate-300">
                            New user? <Link to='/signup' className="font-medium text-primary-600 hover:underline dark:text-primary-500">Signup</Link>
                        </p>

                    </form>

                </div>

            </div>
        </div>
    );
};

export default Signin;