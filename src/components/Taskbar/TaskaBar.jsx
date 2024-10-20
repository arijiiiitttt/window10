import React from 'react'
import { BsWindows } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";


const TaskaBar = () => {
  return (
    <>
   <div className='w-full h-[6.5vh] flex flex-row items-center bg-transparent'>
    <div className='bg-gray-900 w-[6.66vh] h-[6.5vh]'>
    <BsWindows className=''/>
    </div>
    <div className='bg-gray-400 w-[38.7vh] h-[6.5vh]'></div>
    <div className='bg-gray-900 w-[138vh] h-[6.5vh]'></div>
    <div className='bg-gray-900 w-[25vh] h-[6.5vh]'>
    <FaRegUser />
    </div>
   </div>
    </>
  )
}

export default TaskaBar