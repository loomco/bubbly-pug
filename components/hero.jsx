import { FaPaw } from 'react-icons/fa'
import Link from 'next/link'


const HeroSection = () => {
    return (
        <>
            <section id="heroSection" className="   lg:mt-0 h-screen w-full relative" >
                <div id="parallax" className="h-1/3 md:h-4/5 lg:h-full w-full lg:bg-fixed bg-top bg-cover bg-[url('/images/hero-b.png')] flex justify-center items-center">
                    <div className='relative z-10 flex flex-col gap-4 lg:gap-y-10 -translate-y-2 lg:-translate-y-16'>
                        <h1 className='text-h1 text-center text-white leading-tight tracking-wide'>Welcome to the <br /> Bubbly Pug</h1>
                        <Link href="#meetAndGreet">
                            <a className='text-xl lg:text-3xl text-white flex items-center justify-center gap-x-5'><FaPaw />Book a Meet and Greet!<FaPaw /></a>
                        </Link>
                    </div>
                </div>
                <div id="overlay" className="absolute top-0 left-0 h-1/3 md:h-4/5 lg:h-full w-full bg-[#000000ab]"></div>
            </section>
        </>
    )
}

export default HeroSection