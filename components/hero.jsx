import React from 'react'
import { FaPaw } from 'react-icons/fa'
import Link from 'next/link'


const HeroSection = () => {
    return (
        <section id="heroSection" className="hidden lg:block mt-24 lg:mt-0 w-full relative" >
            <div id="parallax" className="h-screen bg-fixed bg-top bg-cover bg-[url('/images/hero-b.png')] flex justify-center items-center">
                <div className='relative z-10 flex flex-col gap-y-10 -translate-y-5'>
                    <h1 className='text-8xl text-center text-white leading-tight tracking-wide'>Welcome to the <br /> Bubbly Pug</h1>
                    <Link href="#meetAndGreet">
                        <a className='text-3xl text-white flex items-center justify-center gap-x-5'><FaPaw />Book a Meet and Greet!<FaPaw /></a>
                    </Link>
                </div>
            </div>
            {/* <img src="/images/hero-b.png" alt="The Bubbly Pug" /> */}
            <div id="overlay" className="absolute top-0 left-0 h-full w-full bg-[#000000ab]"></div>
        </section>
    )
}

export default HeroSection