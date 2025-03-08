import React from 'react'

const AboutInfoCard = (props) => {
    return (
        <li className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:-translate-y-1 hover:shadow-black duration-500 z-0'>
            <div>{props.icon}</div>
            <div>
                <h1 className='my-4 font-semibold text-gray-700'>{props.title}</h1>
                <p className='text-gray-600 text-sm'>{props.subTitle}</p>
            </div>
        </li>
    )
}

export default AboutInfoCard
