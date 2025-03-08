import React from 'react'
import { FaBehanceSquare, FaDribbbleSquare, FaEnvelope, FaGithubSquare, FaInstagramSquare, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='mt-8'>
            <div className='flex flex-col gap-2'>
                <div className='flex justify-center group'>
                    <a href="#top" className="flex font-bold text-4xl relative">
                        <div className='opacity-0 group-hover:opacity-100 h-4 duration-500 ease-in-out bg-yellow-400 w-48  translate-y-6'></div>
                        <div className='absolute left-1/2 -translate-x-1/2'>
                            atharianr<span className='text-red-500 group-hover:text-black duration-500 ease-in-out'>.</span>
                        </div>
                    </a>
                </div>

                <div className='w-max flex items-center gap-2 mx-auto mt-6 text-sm'>
                    <FaEnvelope />
                    <p>atharianrahmadani@gmail.com</p>
                </div>
            </div>

            <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-6 py-6'>
                <p className='text-sm'>© 2025 Atharian Rahmadani.</p>
                <ul className='flex items-center gap-4 justify-center mt-4 sm:mt-0'>
                    <li><a target='_blank' href="https://github.com/atharianr"><FaGithubSquare size={32} /></a></li>
                    <li><a target='_blank' href="https://dribbble.com/atharianr"><FaDribbbleSquare size={32} /></a></li>
                    <li><a target='_blank' href="https://behance.net/atharianr"><FaBehanceSquare size={32} /></a></li>
                    <li><a target='_blank' href="https://id.linkedin.com/in/atharianr"><FaLinkedin size={32} /></a></li>
                    <li><a target='_blank' href="https://instagram.com/atharianr"><FaInstagramSquare size={32} /></a></li>
                </ul>
            </div>
        </div>
    )
}

export default Footer
