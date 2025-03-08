import React from 'react'

const WorkInfoCard = (props) => {
    return (
        <li style={{ backgroundImage: `url(${props.bgImage})` }} className='flex flex-col justify-end border-[0.5px] border-gray-400 rounded-xl p-2 aspect-square bg-no-repeat bg-center bg-cover group cursor-pointer'>
            <div className='flex flex-col bg-white p-2 rounded-lg shadow-lg bg-opacity-65 backdrop-blur-sm group-hover:-translate-y-1 group-hover:shadow-black duration-500 gap-1'>
                <h1 className='font-bold'>{props.title}</h1>
                <h3 className='text-sm' >{props.description}</h3>
            </div>
        </li>
    )
}

export default WorkInfoCard
