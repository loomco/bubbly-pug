import React, { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs';
import { useRouter } from 'next/router';
import Link from 'next/link';


const Footer = () => {
    const router = useRouter();
    const [email, setEmail] = useState("")

    const handleSignup = (e) => {
        e.preventDefault();
        toast.success('Thanks for Signing Up!', {
            position: "bottom-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
        });
        setEmail("");
    }

    const userAccount = router.pathname.includes('/account');
    return (
        <div id="contact" className="bg-[#001B26] text-white w-full" >
            <footer className="flex flex-col px-2 pt-10 mx-auto max-w-7xl gap-y-12 lg:pt-10 lg:px-2">
                {
                    !userAccount && (
                        <div id="contentContainer" className="flex flex-col items-center gap-y-14 lg:flex-row lg:justify-around lg:gap-y-5">
                            <div id="businessHours" className="flex flex-col items-center justify-center text-base leading-relaxed text-center gap-y-5 lg:pr-10">
                                <h3 className="text-2xl">Hours of Operation:</h3>

                                <div>
                                    <p className="mb-1 text-lg font-medium">Monday - Friday</p>
                                    <p className="text-sm">10am - 11pm</p>
                                </div>
                                <div>
                                    <p className="mb-1 text-lg font-medium">Saturday </p>
                                    <p className="text-sm">10am - 12am</p>
                                </div>
                                <div>
                                    <p className="mb-1 text-lg font-medium">Sunday </p>
                                    <p className="text-sm">11am - 6pm</p>
                                </div>
                            </div>

                            <div id="" className="w-[200px]  lg:flex lg:flex-col lg:justify-around gap-y-5">
                                <form>
                                    <fieldset className="flex flex-col border-none gap-y-5 lg:gap-2">
                                        <label className="text-2xl tracking-wide text-center" htmlFor='newsletter'>Sign Up for our Newsletter</label>
                                        <input className="w-full p-2 text-center border-none rounded-md md:text-base lg:text-base" id="newsletter" type="email" placeholder='Stay up to date!' value={email} onChange={(e) => setEmail(e.target.value)} />
                                    </fieldset>
                                    <button
                                        className="w-full p-2 mt-2 text-base tracking-wide text-white bg-transparent border rounded-md border-slate-2"
                                        type="submit"
                                        value={email}
                                        onClick={(e) => handleSignup(e)}>Sign Up!</button>
                                </form>

                                <div id="businessInfo" className="flex flex-col items-center pt-5 text-xl leading-relaxed text-center gap-y-4 md:items-center">
                                    <p className="text-base leading-snug">
                                        123 Tampa Bay Ave. <br />
                                        Tampa, FL 77777
                                    </p>
                                    <p className="text-base">
                                        (123)-456-7890
                                    </p>
                                    <div className="flex justify-center mt-0 text-2xl gap-x-3">
                                        <Link href="/"><a><BsFacebook className="text-[22px]" /></a></Link>
                                        <Link href="/"><a><BsInstagram className="text-[22px]" /></a></Link>
                                        <Link href="/"><a><BsTwitter className="text-[22px]" /></a></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
                <span className={`text-center ${userAccount ? "lg:translate-x-[125px] text-sm" : "text-xs"}`}>Copyright &copy; {new Date().getFullYear()} LoomCo & ALStudio</span>
                <ToastContainer
                    position="bottom-center"
                    autoClose={3000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                />
            </footer>
        </div>
    )
}

export default Footer