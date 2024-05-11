import React, { useState } from 'react'
import loginIcons from '../assets/signin.gif'
import { FaEye } from 'react-icons/fa'
import { FaEyeSlash } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import imageTobase64 from '../helpers/imageTobase64'
import SummaryApi from '../api'
import { toast } from 'react-toastify';
import { useContext } from 'react'
import Context from '../context'

const Login = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [data, setData] = useState({
        email: "",
        password: ""
    })
    
    const navigate = useNavigate()
    const { fetchUserDetails, fetchUserAddToCart } = useContext(Context)

    const handleOnChange = (e) => {
        const { name, value } = e.target
        setData((prev) => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const dataResponse = await fetch(SummaryApi.signIN.url, {
            method: SummaryApi.signIN.method,
            credentials : 'include',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })

        const dataApi = await dataResponse.json()

        if (dataApi.success) {
            toast.success(dataApi.message)
            navigate('/')
            fetchUserDetails()
        }
        
        if (dataApi.error) {
            toast.error(dataApi.message)
        }
    }

    console.log("data login", data)

    return (
        <section id='login'>
            <div className='mx-auto container p-4'>
                <div className='bg-white p-5 w-full max-w-sm mx-auto roun'>
                    <div className='w-20 h-20 mx-auto'>
                        <img src={loginIcons} alt='login icons' />
                    </div>

                    <form className='pt-6 flex flex-col gap-2' onSubmit={handleSubmit}>
                        <div className='grid'>
                            <label>Email : </label>
                            <div className='bg-slate-200 p-2'>
                                <input
                                    type='email'
                                    placeholder='Enter Email'
                                    name='email' value={data.email}
                                    onChange={handleOnChange}
                                    className='w-full h-full outline-none bg-transparent'
                                />
                            </div>
                        </div>
                        <div>
                            <label>Password : </label>
                            <div className='bg-slate-200 p-2 flex'>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name='password' value={data.password}
                                    onChange={handleOnChange} placeholder='Enter Password'
                                    className='w-full h-full outline-none bg-transparent'
                                />
                                <div className='cursor-pointer text-xl' onClick={() => setShowPassword((prev) => !prev)}>
                                    <span>
                                        {
                                            showPassword ? (
                                                <FaEyeSlash />
                                            )
                                                : (
                                                    <FaEye />
                                                )
                                        }
                                    </span>
                                </div>
                            </div>

                            <div>
                                <Link to={'/forgot-password'} className='block w-fit ml-auto hover:underline hover:text-red-600'>
                                    Forgot Password ?
                                </Link>
                            </div>
                        </div>

                        <button className='bg-red-600 text-white font-bold text-xl px-6 py-2 w-full max-w-[150px] rounded-full hover:scale-110 transition-all mx-auto block mt-6 hover:bg-red-800'>Login</button>
                    </form>

                    <p className='my-2'>Don't have account ? <Link to={'/sign-up'} className='text-red-600 hover:text-red-700 hover:underline'>Sign up</Link></p>
                </div>
            </div>
        </section>
    )
}

export default Login