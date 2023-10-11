import React from 'react'
import logo from "../assets/logo 3 (1).png"
import { BiSolidDownArrow } from "react-icons/bi"
const Navbar = () => {

    return (
        <div className='flex justify-between items-center absolute left-0 top-0 w-screen text-zinc-50 px-32 py-6 '>
            <img src={logo} alt="Logo" className='cursor-pointer' />
            <div className='flex gap-5 items-center'>
                <ul className='flex gap-6 '>
                    <li>Unranked Accounts</li>
                    <li className='flex  items-center gap-1'> Boosting
                        <BiSolidDownArrow className='text-xs '/>
                    </li>
                    <li> Coaching</li>
                    <li>Discord</li>
                    <li>Blog</li>
                    <li className='border-r-2'></li>
                </ul>
                <button className='px-6 py-3 border rounded-3xl font-medium'>Login</button>
            </div>
        </div>
    )
}

export default Navbar