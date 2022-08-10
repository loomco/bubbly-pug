import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/future/image'
import { useSession, signOut, signIn } from 'next-auth/react';
import { AiOutlineClose } from 'react-icons/ai'
import { GoThreeBars } from 'react-icons/go'
const Navigation = () => {
    const router = useRouter();
    const { data: session, status } = useSession();

    const [toggleMobileMenu, setToggleMobileMenu] = useState(false);
    const [toggleAccountMenu, setToggleAccountMenu] = useState(false);

    useEffect(() => {
        document.querySelectorAll('li a').forEach((link) => {
            link.addEventListener('click', () => {
                setToggleMobileMenu(false);
            });
        });

        return
    }, [])

    const handleSignin = () => {
        signIn('google', {
            // callbackUrl: 'https://bubbly-pug.vercel.app/account/dashboard'
            callbackUrl: 'http://localhost:3000/account/dashboard'
        })
    }

    const handleSignout = () => {
        signOut({
            callbackUrl: 'https://bubbly-pug.vercel.app/'
        })
    }

    const handleCloseAccountMenu = () => setToggleAccountMenu(false);

    return (
        <div className=" z-10 bg-[#001B26]  ">
            <nav id="navigation" className='flex justify-between py-5 px-8 lg:px-20 w-full max-w-[1800px] mx-auto relative'  >

                <Link href="/">
                    <a >
                        <Image src='/images/logo/logo.png' alt="The Bubbly Pug" height={60} width={52.44} />
                    </a>
                </Link>

                <button aria-expanded={toggleMobileMenu ? 'true' : 'false'} aria-controls="navigationLinks"
                    title="Open and Close Navigation" onClick={() => setToggleMobileMenu(!toggleMobileMenu)}>
                    {
                        !toggleMobileMenu ?
                            <GoThreeBars className="text-white text-3xl lg:hidden" />
                            :
                            <AiOutlineClose className="text-white text-3xl lg:hidden" />
                    }
                </button>

                <ul id="navigationLinks" className={`text-lg z-20 text-white bg-[#001B26] ${toggleMobileMenu ? "grid justify-items-center items-center absolute top-[90px] left-0 right-0 h-screen gap-y-12 overflow-y-scroll pt-5 pb-10" : "hidden  lg:flex items-center gap-x-5 "}`}>
                    <li><Link href="/"><a className={`${router.pathname === "/" ? "" : ''}`}>Home</a></Link></li>

                    <li><Link href="/about"><a className={`${router.pathname === "/about" ? "" : ''}`}>About</a></Link></li>

                    <li><Link href="/services"><a className={`${router.pathname === "/services" ? "" : ''}`}>Services</a></Link></li>

                    <li><Link href="/#meetAndGreet"><a className={`${router.pathname === "/#meetAndGreet" ? "" : ''}`}>Meet and Greet</a></Link></li>

                    <li><Link href="/contact"><a className={`${router.pathname === "/contact" ? "" : ''}`}>Contact</a></Link></li>

                    {

                        session && (
                            <li style={{ color: "#fff", textAlign: "center", cursor: "pointer", position: "relative" }} onClick={() => setToggleAccountMenu(prev => !prev)} >Account
                                <ul >

                                    <li><Link href="/account/dashboard" onClick={handleCloseAccountMenu}><a className={`${router.pathname === "/account" ? "" : ''}`}>Dashboard</a></Link></li>
                                    <li><Link href="/account/pet-profile" onClick={handleCloseAccountMenu} ><a className={`${router.pathname === "/account" ? "" : ''}`}>Pet Profile</a></Link></li>
                                    <li><Link href="/account/create-pet-profile" onClick={handleCloseAccountMenu} ><a className={`${router.pathname === "/account" ? "" : ''}`}>Create Pet Profile</a></Link></li>

                                </ul>
                            </li>
                        )
                    }
                    {status === 'unauthenticated' && (
                        <button type="button"
                            onClick={handleSignin}>
                            SignIn</button>
                    )}

                    {
                        status === 'authenticated' && (
                            <button type="button"
                                onClick={handleSignout}>
                                Signout</button>
                        )
                    }
                </ul>
            </nav>
        </div>
    )
}

export default Navigation