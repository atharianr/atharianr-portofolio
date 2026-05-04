import { testimonialData } from '@/assets/assets';
import React from 'react';
import TestimonialCard from './card/TestimonialCard'

const Testimonial = () => {
    // Duplicate data so the infinite scroll animation is seamless
    const duplicatedData = [...testimonialData, ...testimonialData];

    return (
        <section id="testimonial" className="w-full py-20 overflow-hidden relative">
            <h1 className="text-center text-[20px]">Testimonial</h1>
            <h2 className="text-center text-[48px] font-bold mb-12">What People Say</h2>

            <div className="flex flex-col gap-8 relative w-full">
                {/* 
                    Fade Masks (Optional, creates a nice fade out on the edges)
                    Using a simple gradient mask for the edges of the screen 
                */}
                <div className="absolute inset-0 pointer-events-none z-10 w-full bg-gradient-to-r from-[var(--background)] via-transparent to-[var(--background)]" />

                {/* Top Row - Scrolls Left to Right */}
                <div className="relative w-full flex overflow-hidden group">
                    <div className="flex animate-scroll-right group-hover:[animation-play-state:paused] w-max">
                        {duplicatedData.map((testimonial, index) => (
                            <TestimonialCard
                                key={`top-${index}`}
                                {...testimonial}
                            />
                        ))}
                    </div>
                </div>

                {/* Bottom Row - Scrolls Right to Left */}
                <div className="relative w-full flex overflow-hidden group">
                    <div className="flex animate-scroll-left group-hover:[animation-play-state:paused] w-max">
                        {duplicatedData.map((testimonial, index) => (
                            <TestimonialCard
                                key={`bottom-${index}`}
                                {...testimonial}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonial;
