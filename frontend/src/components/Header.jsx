import React from 'react'
import Logo from './Logo'
import { GrSearch } from 'react-icons/gr'
import { FaRegCircleUser,FaCartShopping } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='h-16 shadow-md bg-white '>
        <div className='h-full container mx-auto flex items-center px-4 justify-between'>
            <div className=''>
                <Link to={"/"}>
                    <Logo w={50} h={50}/>
                </Link>
            </div>

            <div className='hidden lg:flex items-center w-full justify-between max-w-sm border rounded-full focus-within:shadow-md pl-2'>
                <input type='text' placeholder='Search Product Here' className='w-full outline-none pl-2'/>
                <div className='text-lg min-w-[50px] h-8 bg-red-600 flex items-center justify-center rounded-r-full text-white'>
                    <GrSearch/>
                </div>
            </div>

            <div className='flex items-center gap-7'>
                <div className='text-3xl cursor-pointer'>
                    <FaRegCircleUser/>
                </div>
                
                <div className='text-2xl relative'>
                    <span><FaCartShopping/></span>
                    <div className='bg-red-600 text-white w-5 h-5 rounded-full p-1 flex items-center justify-center absolute -top-2 -right-2'>
                        <p className='text-xs'>0</p>
                    </div>
                </div>

                <div>
                    <Link to={"/login"} className='px-3 py-1 pb-2 rounded-full text-white font-bold text-sm bg-red-600 hover:bg-red-700'>Login</Link>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header