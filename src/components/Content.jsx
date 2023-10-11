import React from 'react'
import logoreview from "../assets/logoreview.png"
import { BiSolidRightArrow } from "react-icons/bi"
const Content = () => {
    return (
        <div className='text-zinc-50 absolute top-1/2 left-1/2 translate-x-4.25  translate-y-4.25 text-center w-screen '>
            <h1 className='text-[72px] font-black '>League of Legends <br /> Unranked Accounts</h1>
            <p className='text-2xl font-semibold text-stone-500 '>Get an experienced League of Legends Booster to <br />rank up your account, quickly!</p>
            <div className='flex justify-center items-center mt-8 gap-4 font-normal'>
                <img src={logoreview} alt="REVIEW" />
                <BiSolidRightArrow />
                <p className='text-2xl  text-stone-500 border-dotted border-r-2 pr-4'><span className='font-semibold text-zinc-50'>4.87</span> out of 5</p>
                <p className='text-2xl  text-stone-500'><span className='font-semibold text-zinc-50'>1.700+</span> Reviews</p>
            </div>
        </div>
    )
}

export default Content