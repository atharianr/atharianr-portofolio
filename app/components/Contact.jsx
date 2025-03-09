import React from 'react'
import { FaArrowRight } from 'react-icons/fa6';

const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY);

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <section id='contact' className='w-full px-[12%] py-20'>
            <h1 className='text-center text-[20px]'>Let&apos;s Connect</h1>
            <h2 className='text-center text-[48px] font-bold'>Reach Out to Me</h2>

            <p className='text-center mx-auto mt-4 max-w-2xl'>
                I&apos;m always excited to hear from you! Whether you have a question, a project idea, or just want to say hi, drop me a message using the form below.
            </p>

            <form onSubmit={onSubmit} className='max-w-2xl mx-auto'>
                <div className='grid grid-cols-auto gap-4 mt-10 mb-4'>
                    <input type="text" placeholder='Enter your name' required name='name' className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white' />
                    <input type="email" placeholder='Enter your email' required name='email' className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white' />
                </div>

                <textarea rows='6' placeholder='Enter your message' required name='message' className='w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6 min-h-48 max-h-64'></textarea>

                <button type='submit' className='py-3 px-8 w-max flex items-center justify-between gap-2 bg-black text-white rounded-lg mx-auto hover:bg-black/80 duration-500'>Submit now <FaArrowRight/></button>

                <p className='mt-4 text-center'>{result}</p>
            </form>

        </section>
    )
}

export default Contact
