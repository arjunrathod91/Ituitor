import React, { useState } from 'react'
import ClearIcon from '@mui/icons-material/Clear';

function Sidebar({ setOpen,open }) {
    // const [translate,setTranslate] = useState('-100')

    return (
        <div style={{transform: `translateX(${open ? '0' : '-100%'})`}} className='border-1 h-screen z-[999] sticky top-[0%] left-[0%] w-[90vw] bg-white flex flex-col justify-start items-start py-5'>
            {/* <div className='w-full flex justify-end' onClick={() => setOpen(false)}><ClearIcon className='' /></div> */}
            {/* <a className="flex items-center items-center mb-[20px]">
                <img className='h-[30px] w-[30px]' src="https://cdn2.iconfinder.com/data/icons/office-and-business-special-set-2/260/31-512.png" />
                <span className="ml-3 sm:ml-[5px] text-xl">Ituotor</span>
            </a> */}
            <div className='pr-[170px] cursor-pointer' onClick={()=>setOpen(false)}>Home</div>
            <div className='pr-[170px] cursor-pointer' onClick={()=>setOpen(false)}>About</div>
            <div className='pr-[170px] cursor-pointer' onClick={()=>setOpen(false)}>Services</div>
            <div className='pr-[170px] cursor-pointer' onClick={()=>setOpen(false)}>Login</div>
        </div>
    )
}

export default Sidebar