import React from 'react'
import { FaPaw } from 'react-icons/fa'

const MeetandGreetForm = () => {
    return (
        <section id="meetAndGreet" className="px-5 py-10 mb-24 scroll-m-24">
            <h2 className='text-center text-h2 font-quicksand'>Book Your <br className='lg:hidden' />  Meet and Greet!</h2>
            <form className="flex flex-col max-w-xl grid-cols-1 gap-10 pt-10 mx-auto md:grid md:grid-cols-2">
                <fieldset className="flex flex-col border-none gap-y-2">
                    <label htmlFor="name" className="text-xl">Name</label>
                    <input id="name" className="p-2 text-lg border-none rounded-lg shadow-lg" type="text" />
                </fieldset>
                <fieldset className="flex flex-col border-none gap-y-2">
                    <label htmlFor="phone" className="text-xl">Phone Number</label>
                    <input id="phone" className="p-2 text-lg border-none rounded-lg shadow-lg" type="tel" />
                </fieldset>
                <fieldset className="flex flex-col border-none gap-y-2">
                    <label htmlFor="email" className="text-xl">Email</label>
                    <input id="email" className="p-2 text-lg border-none rounded-lg shadow-lg" type="email" />
                </fieldset>
                <fieldset className="flex flex-col border-none gap-y-2">
                    <label htmlFor="date" className="text-xl">Date</label>
                    <input id="date" className="p-2 text-lg border-none rounded-lg shadow-lg" type="date" />
                </fieldset>
                <button className="p-2 rounded-xl border border-[#001B26] bg-transparent col-span-2 w-64 flex justify-center items-center gap-x-2 mt-4 mx-auto mb-0 " type="submit"><FaPaw /> Book Now <FaPaw /></button>
            </form>
        </section>
    )
}

export default MeetandGreetForm