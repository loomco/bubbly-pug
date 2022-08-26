import { FaPaw } from 'react-icons/fa'
import Link from 'next/link'


const HeroSection = () => {
    return (
        <>
            <section id="heroSection" className="relative w-full mt-24 h-60 md:h-96 lg:h-screen font-quicksand" >
                <div id="parallax" className=" h-full w-full lg:bg-fixed bg-top bg-cover bg-[url('/images/hero-b.png')] flex justify-center items-center">
                    <div className='relative z-10 flex flex-col gap-4 -translate-y-1 lg:gap-y-10 lg:-translate-y-16'>
                        <h1 className='leading-tight tracking-wide text-center text-white text-heroh1'>Welcome to the <br /> Bubbly Pug</h1>
                        <Link href="#meetAndGreet">
                            <a className='flex items-center justify-center text-xl text-white lg:text-3xl gap-x-5'><FaPaw />Book a Meet and Greet!<FaPaw /></a>
                        </Link>
                    </div>
                </div>
                <div id="overlay" className="absolute top-0 left-0 bottom-0    w-full bg-[#000000ab]"></div>
            </section>
        </>
    )
}

export default HeroSection