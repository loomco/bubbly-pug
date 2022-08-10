import React, { useState } from 'react'
import Image from 'next/image'
import { toast, ToastContainer } from 'react-toastify'
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs';
import { useRouter } from 'next/router';


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
            <footer className="pt-10 px-2 max-w-7xl mx-auto flex flex-col gap-y-12 lg:pt-10 lg:px-2">
                {
                    !userAccount && (
                        <div id="contentContainer" className="flex flex-col items-center gap-y-14 lg:flex-row lg:justify-around lg:gap-y-5">
                            <div id="businessHours" className=" text-center flex flex-col justify-center items-center gap-y-5 text-base leading-relaxed lg:pr-10">
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
                                        <label className="text-2xl text-center tracking-wide" htmlFor='newsletter'>Sign Up for our Newsletter</label>
                                        <input className="md:text-base lg:text-lg p-2 w-full rounded-md border-none" id="newsletter" type="email" placeholder='Stay up to date!' value={email} onChange={(e) => setEmail(e.target.value)} />
                                    </fieldset>
                                    <button
                                        className="mt-2 p-2 w-full tracking-wide border border-slate-2 text-white rounded-md bg-transparent text-base"
                                        type="submit"
                                        value={email}
                                        onClick={(e) => handleSignup(e)}>Sign Up!</button>
                                </form>

                                <div id="businessInfo" className="pt-5 flex flex-col items-center gap-y-4 text-center md:items-center
                                leading-relaxed text-xl">
                                    <p className="text-base leading-snug">
                                        123 Tampa Bay Ave. <br />
                                        Tampa, FL 77777
                                    </p>
                                    <p >
                                        (123)-456-7890
                                    </p>
                                    <div className="flex justify-center gap-x-3 text-2xl mt-0">
                                        <BsFacebook />
                                        <BsInstagram />
                                        <BsTwitter />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
                <span className="text-xs text-center">Copyright &copy; {new Date().getFullYear()} LoomCo & ALStudio</span>
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