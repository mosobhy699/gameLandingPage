import React, { useState } from 'react'
import { boost, Addons, region, select_champions, select_roles } from './constant/data'
import { IoEllipse } from "react-icons/io5"
import logoreview from "../../src/assets/logoreview.png"
import { AiFillStar } from "react-icons/ai"
import { BiSolidDownArrow, BiSolidUpArrow } from "react-icons/bi"
const Menu = () => {
    const [icon, seticon] = useState(true)
    const handleIcon = () => {
        seticon((perv) => !perv)

    }

    return (
        <div className='container mx-auto relative text-zinc-50 bg-Dark_black p-14 border-Dark_Gray border-2 rounded-3xl shadow-2xl bottom-64'>
            <div className='flex w-full  gap-6 justify-between'>
                {boost.map((item, index) => {
                    return (
                        <p key={index} className='p-6 font-semibold hover:bg-zinc-800 border-2 transition border-solid border-Dark_Gray cursor-pointer rounded-3xl' style={index === 0 ? { backgroundColor: "#2E2E2E" } : {}}> {item.name}</p>
                    )
                })}

            </div>
            <div className='grid grid-cols-3 gap-6 mt-8' >
                {region.slice(0, 3).map((item, index) => {
                    return (
                        <div key={index} className='px-6 py-4 border-Dark_Gray border-2 rounded-2xl'>
                            <h5 className='mb-4'>{item.title}</h5>
                            <div className='flex justify-between items-center'>
                                <p className='font-semibold'>{item.country}</p>
                                {item.icon}
                            </div>
                        </div>

                    )
                })}
            </div>
            <div className='grid grid-cols-2 gap-6 mt-8' >
                {region.slice(3, 5).map((item, index) => {
                    return (

                        <div key={index} className=' border-Dark_Gray border-2 rounded-2xl flex'>
                            <img src={item.img} alt="RANK" className='px-6 py-4 w-28' />
                            <div className='border-l-2 border-Dark_Gray px-6 py-4 w-full'>
                                <h5 className='mb-4'>{item.title}</h5>
                                <div className='flex justify-between items-center '>
                                    <p className='font-semibold'>{item.country}</p>
                                    {item.icon}
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className='toggle mt-8'>
                <label htmlFor='toggle' className='label flex items-center gap-1 cursor-pointer' onClick={handleIcon}>Addons {icon ? <BiSolidUpArrow /> : <BiSolidDownArrow />}</label>
                <input type='checkbox' id="toggle" />
                <div className='border-2 rounded-2xl  border-Dark_Gray p-4 mt-4 togglediv'>
                    {icon ? <div className='grid grid-cols-3 gap-6 '>
                        {Addons.map((item, index) => (

                            <div key={index} className='flex items-center justify-between border-Dark_Gray border-2 py-4 px-3 rounded-2xl  '>
                                <input type='radio' id={index} name='mo' className='customRadio' />
                                <label htmlFor={index} className='customLabel w-full cursor-pointer'> <span className='py-1 px-2 rounded-3xl mr-2 ' style={{ backgroundColor: `${item.bg}`, color: `${item.col}` }}>{item.price}</span>{item.para}</label>
                            </div>

                        ))}
                    </div> : ""}


                    <div className='grid grid-cols-2 gap-6 mt-8' >
                        {region.slice(5, 7).map((item, index) => {
                            return (
                                <div key={index} className=' border-Dark_Gray border-2 rounded-2xl flex'>

                                    <div className=' px-6 py-4 w-full'>
                                        <h5 className='mb-4'>{item.title}</h5>
                                        <div className='flex justify-between items-center '>
                                            <p className='font-semibold'>{item.country}</p>
                                            {item.icon}
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                        <div className='flex items-center text-sm gap-2'>
                            {select_champions.map((item, index) =>
                                <div key={index} className='flex items-center justify-center gap-3 py-1 pl-1 pr-2 bg-Dark_Gray rounded-3xl cursor-pointer'>
                                    <div className='flex items-center gap-1'>
                                        <img src={item.img} alt="" className='rounded-full w-6' />
                                        <span >{item.name}</span>
                                    </div>
                                    {item.icon}
                                </div>
                            )}
                        </div>
                        <div className='flex items-center text-sm gap-2'>
                            {select_roles.map((item, index) =>
                                <div key={index} className='flex gap-2 items-center justify-center  p-2 bg-Dark_Gray rounded-3xl cursor-pointer'>
                                    <span >{item.name}</span>
                                    {item.icon}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div className=' w-full flex items-center justify-end mt-8 font-semibold gap-4'>
                <span className='flex items-center py-2 px-6 border-2 border-Dark_Gray rounded-full' style={{ color: "#04B856" }}> <IoEllipse className='mr-1' />88 Boosters online</span>
                <div className='flex items-center py-2 px-6  border-2 border-Dark_Gray rounded-full'>
                    <span>4.87 </span>
                    <AiFillStar className='mr-2' />
                    <img src={logoreview} alt="" className='w-24' />
                </div>
            </div>
            <div className='mt-8'>
                <span className='text-xl font-semibold text-zinc-600'>Total price: <span className='text-3xl text-zinc-50'>$29.1</span></span>
                <div className='flex justify-between items-center'>
                    <form className='mt-4' onClick={(e) => e.preventDefault()}>
                        <input type='text' placeholder='Discount code' className='p-4 rounded-2xl mr-2 bg-Dark_black border-2 border-Dark_Gray outline-none focus:border-sky-500  focus:ring-1' />
                        <input type='submit' value='Apply' className='px-6 py-4 bg-Dark_Gray rounded-2xl cursor-pointer' />
                    </form>
                    <button className='px-28 py-4 bg-zinc-100 text-zinc-900 font-semibold rounded-2xl'>Add to Cart</button>
                </div>
            </div>
        </div >
    )
}

export default Menu