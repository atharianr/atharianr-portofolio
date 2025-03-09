import { assets, infoList } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import AboutInfoCard from './card/AboutInfoCard'

const About = () => {
    return (
        <section id='about' className='w-full px-[12%] py-20'>
            <h1 className='text-center text-[20px]'>Welcome to My World</h1>
            <h2 className='text-center text-[48px] font-bold'>Get to Know Me</h2>

            <div className='mt-8 flex gap-5 lg:gap-20 flex-col lg:flex-row lg:mt-16 items-center justify-center'>
                <Image src={assets.about_profile_pic} alt='' className='w-64 border-[0.5px] border-gray-400 rounded-xl' />

                <div className='max-w-2xl'>
                    <p className='text-center lg:text-start'>I am an experienced software developer from Surabaya, Indonesia with 4+ years of experience in multiple companies and projects. Interested in Mobile Apps and Website Development. I can work as a team or individual, work under pressure, and always interested in keeping up with the growth of technology.</p>

                    <ul className='mt-4 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl lg:mt-8'>
                        {infoList.map((info, index) => (
                            <AboutInfoCard icon={info.icon} title={info.title} subTitle={info.description} key={index} />
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default About
