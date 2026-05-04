import React from 'react'

const TestimonialCard = ({ quote, name, role, date }) => {
    return (
        <div className="min-w-[300px] max-w-[350px] p-6 border-[0.5px] border-gray-400 rounded-xl bg-white/5 backdrop-blur-sm shadow-sm flex flex-col gap-4 mx-4 transition-transform duration-300">
            <p className="text-sm italic text-gray-700 flex-grow">&quot;{quote}&quot;</p>
            <div className="flex justify-between items-end mt-4">
                <div>
                    <h3 className="font-semibold text-md text-gray-900">{name}</h3>
                    <p className="text-xs text-gray-500">{role}</p>
                </div>
                <span className="text-xs text-gray-400">{date}</span>
            </div>
        </div>
    );
};

export default TestimonialCard;