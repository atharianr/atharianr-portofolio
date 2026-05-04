import React from 'react'
import { workData } from '@/assets/assets'
import Link from 'next/link'
import { FaArrowLeft } from 'react-icons/fa6'
import { notFound } from 'next/navigation'

export default function DetailPage({ params }) {
    const id = parseInt(params.id);
    
    if (isNaN(id) || id < 0 || id >= workData.length) {
        return notFound();
    }

    const work = workData[id];
    // Ensure bgImage path is absolute from root so it loads properly from sub-routes
    const bgImageUrl = work.bgImage;

    return (
        <div className='min-h-screen pt-20 px-[5%] lg:px-[12%] pb-20'>
            <Link href="/#work" className='inline-flex items-center gap-2 mb-8 text-gray-600 hover:text-black transition-colors'>
                <FaArrowLeft /> Back to Portfolio
            </Link>

            <div className='w-full rounded-2xl overflow-hidden shadow-lg mb-10 h-[40vh] md:h-[60vh] relative'>
                <div 
                    className='absolute inset-0 bg-cover bg-center bg-no-repeat'
                    style={{ backgroundImage: `url(${bgImageUrl})` }}
                />
            </div>

            <div className='max-w-4xl mx-auto'>
                <h1 className='text-4xl md:text-5xl font-bold mb-4'>{work.title}</h1>
                <div className='inline-block bg-gray-100 px-4 py-1 rounded-full text-sm font-medium text-gray-700 mb-8'>
                    {work.description}
                </div>

                <div className='prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6'>
                    <p>
                        This is a template detail page for <strong>{work.title}</strong>. 
                        In a real application, you would fetch more detailed information about this project from a database or CMS.
                    </p>
                    
                    <h2 className='text-2xl font-bold text-black mt-8 mb-4'>Project Overview</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>

                    <h2 className='text-2xl font-bold text-black mt-8 mb-4'>Key Features</h2>
                    <ul className='list-disc pl-6 space-y-2'>
                        <li>Interactive UI components and seamless navigation</li>
                        <li>Robust backend architecture and data management</li>
                        <li>Optimized for performance and accessibility</li>
                        <li>Responsive design that looks great on all devices</li>
                    </ul>

                    <h2 className='text-2xl font-bold text-black mt-8 mb-4'>Technologies Used</h2>
                    <p>
                        {work.description}
                    </p>
                </div>
            </div>
        </div>
    )
}
