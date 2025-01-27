import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form"
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
function Login() {
    const [message, setMessage] = useState(" ");
    const { loginUser ,signInWithGoogle} = useAuth();  //hook to get all value passes in context.
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        try {
            await loginUser(data?.email, data?.password);
            alert("user login successfully");
            navigate("/");
        } catch (error) {
            setMessage("Please provide a valid email and password");
            console.log(error);
        }
    }
    const handleGoogleSignIN = async() => {
        try {
            await signInWithGoogle();
            alert("user signed in successfully!!");
            navigate("/");
        } catch (error) {
            alert("Google sign in failed");
            console.log(error);
        }
    }

    return (
        <div className='h-[calc(100vh-120px)] flex justify-center items-center '>
            <div className='w-full max-w-sm px-8 pt-6 pb-8 mx-auto mb-4 bg-white rounded shadow-md'>
                <h2 className='mb-4 text-xl font-semibold'>Please Login</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='mb-4'>
                        <label className='mb-2 font-bold text-gray-500 '>Email</label>
                        <input type="text" placeholder='Enter your email address'
                            {...register("email", { required: true })}
                            name='email' id="email"
                            className='w-full p-1 border rounded-sm shadow focus:outline-none focus:shadow' />
                    </div>
                    <div className='mb-4'>
                        <label className='mb-2 font-bold text-gray-500 '>Password</label>
                        <input type="text" placeholder='Enter your Password'
                            {...register("password", { required: true })}
                            name='password' id="password"
                            className='w-full p-1 border rounded-sm shadow focus:outline-none focus:shadow' />
                    </div>

                    {
                        message && <p className='text-sm italic text-red-500'>{message}</p>
                    }

                    {/* NOte: since this button has default type : submit in html so here this button act as submit type so trigers onSubmit founction */}
                    <div>
                        <button className='px-1 py-1 text-white bg-blue-500 rounded font-semi-bold focus:outline-none hover:bg-blue-700'>
                            Submit</button>
                    </div>
                </form>
                <p className='mt-1 align-baseline font-sm '>Haven't an account ?,Please
                    <Link to="/register" className='text-blue-500 hover:text-blue-700'> Regsiter</Link></p>

                {/* google sign IN */}

                <div className='m-5'>
                    <button
                        onClick={handleGoogleSignIN}
                        className='flex flex-wrap items-center justify-center gap-2 px-4 py-2 text-white rounded bg-secondary hover:bg-blue-700 focus:outline-none'>
                        <FaGoogle />
                        Sign in with Google
                    </button>
                </div>
                <p className='mt-5 text-xs text-center text-gray-500'>©2025 Book Store. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Login
