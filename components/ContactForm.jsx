import React from 'react'

const ContactForm = () => {
    return (
        <div className='pt-32 pb-40 max-w-lg mx-auto'>
            <h1 className="text-h1 text-center">Contact</h1>
            <form className='flex flex-col lg:grid lg:grid-cols-2 gap-x-2 gap-y-5 p-5'>
                <fieldset className='flex flex-col'>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" className='border rounded-lg p-1' />
                </fieldset>

                <fieldset className='flex flex-col'>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" className='border rounded-lg p-1' />
                </fieldset>

                <fieldset className='flex flex-col col-span-2'>
                    <label htmlFor="phone">Phone Number</label>
                    <input type="tel" id="phone" className='border rounded-lg p-1' />
                </fieldset>

                <fieldset className='col-span-2 flex flex-col '>
                    <label htmlFor="message">Message</label>
                    <textarea id="message" cols="30" rows="10" className='border rounded-lg p-1' />
                </fieldset>

                <button className="border rounded-xl p-2 col-span-2 w-1/2 mx-auto">Submit</button>
            </form>
        </div>
    )
}

export default ContactForm