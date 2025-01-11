import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form"

function Register() {
    const [message, setMessage] = useState(" ");
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data, "data");
    }
    const handleGoogleSignIN = () => {

    }

    return (
        <div className='h-[calc(100vh-120px)] flex justify-center items-center '>
            <div className='w-full max-w-sm px-8 pt-6 pb-8 mx-auto mb-4 bg-white rounded shadow-md'>
                <h2 className='mb-4 text-xl font-semibold'>Please Register</h2>
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
                <p className='mt-1 align-baseline font-sm '>Haven an account ?,Please
                    <Link to="/login" className='text-blue-500 hover:text-blue-700'> Login</Link></p>

                {/* google sign IN */}

                <div className='m-5'>
                    <button
                        onClick={handleGoogleSignIN}
                        className='flex flex-wrap items-center justify-center gap-2 px-4 py-2 text-white rounded bg-secondary hover:bg-blue-700 focus:outline-none'>
                        <FaGoogle />
                        sign in with Google
                    </button>
                </div>
                <p className='mt-5 text-xs text-center text-gray-500'>©2025 Book Store. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Register
