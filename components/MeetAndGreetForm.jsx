import React from 'react'
import { FaPaw } from 'react-icons/fa'

const MeetandGreetForm = () => {
    return (
        <section id="meetAndGreet" className="py-10 px-5 scroll-m-24 mb-24">
            <h1 className='text-h2 text-center'>Book Your <br className='lg:hidden' />  Meet and Greet!</h1>
            <form className="pt-10 max-w-xl mx-auto flex flex-col md:grid grid-cols-1 md:grid-cols-2 gap-10">
                <fieldset className="flex flex-col border-none gap-y-2">
                    <label htmlFor="name" className="text-xl">Name</label>
                    <input id="name" className="border-none shadow-lg p-2 rounded-lg text-lg" type="text" />
                </fieldset>
                <fieldset className="flex flex-col border-none gap-y-2">
                    <label htmlFor="phone" className="text-xl">Phone Number</label>
                    <input id="phone" className="border-none shadow-lg p-2 rounded-lg text-lg" type="tel" />
                </fieldset>
                <fieldset className="flex flex-col border-none gap-y-2">
                    <label htmlFor="email" className="text-xl">Email</label>
                    <input id="email" className="border-none shadow-lg p-2 rounded-lg text-lg" type="email" />
                </fieldset>
                <fieldset className="flex flex-col border-none gap-y-2">
                    <label htmlFor="date" className="text-xl">Date</label>
                    <input id="date" className="border-none shadow-lg p-2 rounded-lg text-lg" type="date" />
                </fieldset>
                <button className="p-2 rounded-xl border border-[#001B26] bg-transparent col-span-2 w-64 flex justify-center items-center gap-x-2 mt-4 mx-auto mb-0 " type="submit"><FaPaw /> Book Now <FaPaw /></button>
            </form>
        </section>
    )
}

export default MeetandGreetForm