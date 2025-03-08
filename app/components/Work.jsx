import { workData } from '@/assets/assets'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa6'
import WorkInfoCard from './card/WorkInfoCard'

const Work = () => {
    return (
        <section id='work' className='w-full px-[12%] py-20'>
            <h1 className='text-center text-[20px]'>Portfolio</h1>
            <h2 className='text-center text-[48px] font-bold'>Crafting Ideas into Reality</h2>

            <p className='text-center max-w-lg mx-auto mt-4'>Welcome to my portofolio! Explore a collection of projects showcasing my expertise in software development.</p>

            <ul className='grid grid-cols-auto gap-6 mt-12'>
                {workData.slice(0, 8).map((work, index) => (
                    <WorkInfoCard bgImage={work.bgImage} title={work.title} description={work.description} key={index} />
                ))}
            </ul>

            <a href="#work" className='px-6 py-3 border rounded-lg border-gray-500 flex gap-4 items-center justify-center w-max mx-auto mt-12'>Show more <FaArrowRight /></a>
        </section>
    )
}

export default Work
