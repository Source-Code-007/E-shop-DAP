/* eslint-disable no-unused-vars */
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useCreateUserWithEmailAndPasswordMutation } from '../../redux/api/authAPI';
import { Bounce, toast } from 'react-toastify';

const Signup = () => {
    const { authLoading, authInfo, authToken, authError, authSuccess } = useSelector(state => state.auth)

    const [isShowPass, setIsShowPass] = useState(false)
    const [success, setSuccess] = useState('')
    const navigate = useNavigate()

    const user = useSelector((state) => state.auth.user);

    const [createUserWithEmailAndPassword, { isLoading, isSuccess, isError, error }] = useCreateUserWithEmailAndPasswordMutation();


    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const handleSignupFunc = async(form )=> {
        const { name, photo, email, password, terms } = form

        try {
            await createUserWithEmailAndPassword({ email, password, name, photo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStOEQ019zKmnjARTNdTY5jNYy0H_uNox1S5Z1zTFuLyWqmmKxmCQlILFXRrQ&s' });
            // await updateProfile({ name, photo:'https://www.freeiconspng.com/thumbs/computer-user-icon/computer-user-icon-2.png' }); // Assuming you want to update profile after sign up
          } catch (error) {
            toast.error(error.message || 'Something wrong to signup!', {
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

        return 
        // createUserWithEmailPassFunc(email, password)
        //     .then(res => {
        //         // const currUser = res.user
        //         updateProfileFunc(name, photo).then(() => {
        //             signoutUserFunc().then(() => {

        //                 // user stored in database 
        //                 const user = { name, photo, email, date: new Date(), role: 'student' }
        //                 axios.post('http://localhost:3000/users', { user })
        //                     .then(res => {
        //                         setSuccess('user created successfully')
        //                         let timerInterval
        //                         Swal.fire({
        //                             title: 'Congratulations! Registration success.',
        //                             html: 'navigate to signin page',
        //                             timer: 5000,
        //                             timerProgressBar: true,
        //                             willClose: () => {
        //                                 clearInterval(timerInterval)
        //                             }
        //                         }).then((result) => {
        //                             /* Read more about handling dismissals below */
        //                             if (result.dismiss === Swal.DismissReason.timer) {
        //                                 navigate('/signin')
        //                             }
        //                         })

        //                     }).catch(e => console.log(e.message))

        //             }).catch(e => console.log(e.message))
        //         }).catch(e => {
        //             setAuthLoading(false)
        //         })

        //     }).catch(e => {
        //         setAuthLoading(false)
        //         if (e.code === 'auth/email-already-in-use') {
        //             // setError('Email address is already in use. Please use a different email or try logging in.')
        //         } else {
        //             // setError(e.message)
        //         }
        //         console.log(e.message);
        //     })
    };

    return (
        <div className="bg-cover bg-center bg-[#0f1d22] bg-blend-overlay">
            <div className='min-h-screen w-5/6 md:w-3/6 xl:w-2/6 mx-auto flex items-center'>

                <form onSubmit={handleSubmit(handleSignupFunc)} className=' w-full space-y-3 p-10 bg-slate-900 bg-opacity-75 shadow rounded'>
                    <h2 className='font-bold text-3xl text-white'>Please Register</h2>
                    <div>
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-slate-300 dark:text-white">Name</label>
                        <input type='text' className='my-inp' id='name' {...register("name", { required: true })} placeholder='Your name here' />
                        {errors.name && <p className='text-red-500'>This field is required</p>}
                    </div>


                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-slate-300 dark:text-white">email</label>
                        <input type='email' id='email' className='my-inp' {...register("email", { required: true })} placeholder='Your email here' />
                        {errors.email && <p className='text-red-500'>This field is required</p>}
                    </div>

                    <div className='relative'>
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-slate-300 dark:text-white">Password</label>
                        <input type={`${isShowPass ? 'text' : 'password'}`} id='password' className='my-inp' {...register("password", {  required: 'This field is required', pattern: {
                                    value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
                                    message: "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one digit."
                                } })} placeholder='••••••••' />
                        <span className='absolute right-2 top-11 text-white cursor-pointer' onClick={() => setIsShowPass(!isShowPass)}> {isShowPass ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>} </span>
                        {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                    </div>


                    <div className="flex items-center justify-between">
                        <div className="flex items-start">
                            <div className="flex items-center h-5">
                                <input id="terms" name='terms' aria-describedby="terms" type="checkbox" {...register('terms', { required: true })} className="w-4 h-4" />
                            </div>
                            <div className="ml-3 text-sm">
                                <label htmlFor="terms" className='text-slate-300'>Accept <Link className='link-hover link-primary'>Terms and Condition</Link></label>
                            </div>
                        </div>
                    </div>
                    {errors.terms && <p className='text-red-500'>You need to check terms & condition! </p>}

                    <button className='cmn-btn-one w-full' type='submit'>Signup</button>
                    <p className="text-sm font-light text-slate-300">
                        Already have an account? <Link to='/signin' className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign in</Link>
                    </p>

                </form>

            </div>
        </div>
    );
};

export default Signup;