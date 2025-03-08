import React, { useEffect, useState } from 'react'
import { MdOutlineFileDownload } from "react-icons/md";
import { FaArrowDown, FaArrowRight } from "react-icons/fa6";

const Header = () => {
    const [scrollPositionY, setScrollPositionY] = useState(0);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            setScrollPositionY(scrollY)
        })
    }, [])

    return (
        <section id='top' className='h-screen w-full px-[12%] py-20 scroll-mt-20 flex flex-col justify-center'>
            <h1 className='text-center text-[48px]'>
                Greetings! 👋 <br />
                I&#39;m <span className='font-bold'>Atharian Rahmadani</span>
            </h1>

            <h2 className='text-center mt-6 text-[20px] cursor-pointer'>
                Passionate about crafting beautiful apps and websites for a better user experience.
            </h2>

            <div className='flex gap-4 justify-center mt-20'>
                <a href="#contact" className='px-6 py-3 rounded-lg bg-black hover:bg-black/80 duration-500 text-white flex gap-2 items-center'>Contact me<FaArrowRight /></a>
                <a href="/CV_Atharian_Rahmadani.pdf" download className='px-6 py-3 border rounded-lg border-gray-500 flex gap-2 items-center'>My resume <MdOutlineFileDownload size={18} /></a>
            </div>

            <a href="#about" className={`absolute bottom-0 mb-4 w-[36px] left-1/2 -translate-x-1/2 animate-bounce transition-all duration-300 ${scrollPositionY > 150 ? "opacity-0 translate-y-4 pointer-events-none" : "opacity-100 translate-y-0"}`}><FaArrowDown size={30} /></a>
        </section>
    )
}

export default Header
