import React, { useEffect, useRef, useState } from 'react';
import { FaBars } from 'react-icons/fa6';
import { IoClose } from 'react-icons/io5'

const Navbar = () => {
    const [isScroll, setIsScroll] = useState(false);
    const [activeSection, setActiveSection] = useState('');
    const sideMenuRef = useRef();

    const openMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(0rem)';
    };

    const closeMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(-16rem)';
    };

    useEffect(() => {
        // Track scrolling for background and scroll position
        const handleScroll = () => {
            setIsScroll(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);

        // Section observation logic
        const sections = document.querySelectorAll('section'); // Select all sections
        const observerOptions = {
            root: null,
            threshold: 0.6, // Trigger when 60% of the section is visible
        };

        const observerCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);
        sections.forEach((section) => observer.observe(section));

        // Cleanup listeners and observers
        return () => {
            window.removeEventListener('scroll', handleScroll);
            observer.disconnect();
        };
    }, []);

    return (
        <>
            <nav className={`flex w-full fixed justify-between py-5 ${isScroll ? 'bg-white shadow-sm bg-opacity-50 backdrop-blur-lg z-50' : ''}`}>
                <button className="mx-8 md:hidden" onClick={openMenu}>
                    <FaBars />
                </button>

                {/* <a href="#top" className="flex font-bold items-center mx-8">
                    atharianr<span className='text-red-500'>.</span>
                </a> */}

                <div className='flex justify-center group mx-8'>
                    <a href="#top" className="flex font-bold relative">
                        <div className='opacity-0 group-hover:opacity-100 h-0 group-hover:h-[10px] duration-300 ease-in-out bg-yellow-400 w-[86px] translate-y-[13px]'></div>
                        <div className='absolute left-1/2 -translate-x-1/2'>
                            atharianr<span className='text-red-500 group-hover:text-black duration-300 ease-in-out'>.</span>
                        </div>
                    </a>
                </div>

                <ul className="hidden justify-center md:flex items-center gap-6 lg:gap-8 px-12">
                    <li>
                        <a href="#top" className={`${activeSection === 'top' ? 'font-bold' : ''}`}>Home</a>
                    </li>
                    <li>
                        <a href="#about" className={`${activeSection === 'about' ? 'font-bold' : ''}`}>About</a>
                    </li>
                    <li>
                        <a href="#work" className={`${activeSection === 'work' ? 'font-bold' : ''}`}>Works</a>
                    </li>
                    <li>
                        <a href="#contact" className={`${activeSection === 'contact' ? 'font-bold' : ''}`}>Contact</a>
                    </li>
                </ul>

                {/* Mobile menu */}
                <ul
                    ref={sideMenuRef} className="flex flex-col bg-gray-50 fixed top-0 bottom-0 w-64 z-50 md:hidden h-screen px-8 py-20 gap-6 transition duration-500 -translate-x-64">
                    <button className="absolute right-6 top-6" onClick={closeMenu}>
                        <IoClose />
                    </button>
                    <li><a href="#top">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#work">Works</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </>
    );
};

export default Navbar;
