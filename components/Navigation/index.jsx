import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/future/image'
import { useSession, signOut, signIn } from 'next-auth/react';
import { AiOutlineClose } from 'react-icons/ai'
import { GoThreeBars } from 'react-icons/go'
import { Links } from './LinksArray';
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
        <div className="z-30 bg-[#001B26] fixed top-0 left-0 right-0">
            <nav id="navigation" className='flex justify-between py-5 px-8 lg:px-20 w-full max-w-[1800px] mx-auto relative font-nunito'  >

                <Link href="/">
                    <a>
                        <Image src='/bubbly-pug-logo.png' alt="The Bubbly Pug" height={57} width={50} />
                    </a>
                </Link>

                <button aria-expanded={toggleMobileMenu ? 'true' : 'false'} aria-controls="navigationLinks"
                    title="Open and Close Navigation" onClick={() => setToggleMobileMenu(!toggleMobileMenu)}>
                    {
                        !toggleMobileMenu ?
                            <GoThreeBars className="text-3xl text-white lg:hidden" />
                            :
                            <AiOutlineClose className="text-3xl text-white lg:hidden" />
                    }
                </button>

                <ul id="navigationLinks" className={`text-lg z-20 text-white bg-[#001B26] ${toggleMobileMenu ? "flex flex-col items-center gap-y-20 absolute top-[90px] mobile-menu-fixed left-0 right-0 h-80  overflow-y-scroll pt-5 pb-10" : "hidden lg:flex items-center gap-x-5 "}`}>
                    {
                        Links.map((link) => (
                            <li key={link.title}><Link href={link.location}><a className={`${router.pathname === link.location ? "border-b border-b-slate-200" : ''}`}>{link.title}</a></Link></li>
                        ))
                    }

                    {
                        session && (
                            <li style={{ color: "#fff", textAlign: "center", cursor: "pointer", position: "relative" }} onClick={() => setToggleAccountMenu(prev => !prev)} >Account
                                <ul className={`${toggleAccountMenu ? "absolute top-11 -left-16 w-48 bg-[#001B26] flex flex-col gap-y-5 z-30 py-5" : "hidden"}`}>

                                    <li><Link href="/account/dashboard" ><a onClick={handleCloseAccountMenu} className={`${router.pathname === "/account" ? "" : ''}`}>Dashboard</a></Link></li>
                                    <li><Link href="/account/pet-profile"  ><a onClick={handleCloseAccountMenu} className={`${router.pathname === "/account" ? "" : ''}`}>Pet Profile</a></Link></li>
                                    <li><Link href="/account/create-pet-profile"  ><a onClick={handleCloseAccountMenu} className={`${router.pathname === "/account" ? "" : ''}`}>Create Pet Profile</a></Link></li>

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