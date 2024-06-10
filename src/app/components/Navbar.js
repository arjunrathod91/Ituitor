import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import Sidebar from '../components/Sidebar'

function Navbar({open,setOpen}) {
    return (
        <header className="">
            <div className="flex p-5 justify-center items-center gap-[100px] sm:gap-[50px] justify-between">
                <a className="flex items-center items-center">
                    <img className='h-[30px] w-[30px]' src="https://cdn2.iconfinder.com/data/icons/office-and-business-special-set-2/260/31-512.png"/>
                    <span className="ml-3 sm:ml-[5px] text-xl">Ituotor</span>
                </a>
                <nav className="lg:flex md:flex sm:flex items-center justify-center s:hidden">
                    <a className="mr-5 sm:mr-2px hover:text-blue-800 cursor-pointer">Home</a>
                    <a className="mr-5 sm:mr-2px hover:text-blue-800 cursor-pointer">About</a>
                    <a className="mr-5 sm:mr-2px hover:text-blue-800 cursor-pointer">Services</a>
                    <a className="mr-5 sm:mr-2px hover:text-blue-800 cursor-pointer">Blogs</a>
                    <button className="items-center bg-blue-100 border-0 py-1 px-3 focus:outline-none hover:bg-blue-400 hover:text-white rounded">Login
                    </button>
                </nav>
                <div className='lg:hidden md:hidden sm:hidden s:flex' onClick={()=>setOpen(!open)}><MenuIcon/></div>
                
                {/* <button className="exs:flex items-center bg-blue-100 border-0 py-1 px-3 focus:outline-none hover:bg-blue-400 rounded mt-4 md:mt-0">Login
                </button> */}
                {/* {open && <Sidebar setOpen={setOpen}/>} */}
            </div>
        </header>
    )
}

export default Navbar
