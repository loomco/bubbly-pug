import React from 'react'
import Link from 'next/link'
import Image from 'next/future/image'
import { FaPaw } from 'react-icons/fa'

const team = [
    {
        name: "Sean Veres",
        position: "CEO/Manager",
        image: "/images/team/alex.webp"
    },
    {
        name: "Diana Dayton",
        position: "COO/Assistant Manager",
        image: "/images/team/brock.webp"
    },
    {
        name: "Benjamin Demmings",
        position: "CTO/Shift Leader",
        image: "/images/team/bubbles.webp"
    },
    {
        name: "Jonathan Valdez",
        position: "Groomer",
        image: "/images/team/charlie.webp"
    },
    {
        name: "Sarah Parker",
        position: "Groomer",
        image: "/images/team/brock.webp"
    },
    {
        name: "Vera Gan",
        position: "Groomer",
        image: "/images/team/marla.webp"
    },
    {
        name: "Delilah Perry",
        position: "Groomer",
        image: "/images/team/rick.webp"
    },
]




const AboutComp = () => {
    return (
        // <div className={styles.wrapper}>
        <div className="max-w-[1320px] mx-auto py-40 px-4">
            <h1 className="text-center text-h1">About the <br className="block md:hidden" />Bubbly Pug</h1>
            {/* 
            <div className={styles.aboutText__container}> */}
            <div className="flex flex-col-reverse items-center justify-between px-1 py-10 xl:flex-row gap-x-5">
                {/* <p className={styles.about__text}> */}
                <p className="leading-loose max-w-[800px] font-nunito">
                    We all love our pups. Unfortunately, the pups we love can get absolutely filthy. Their scary claws clack across the hardwood floor. Their thick fur floats throughout the house. Their smelly smell can get, well, smelly. Not only are these problems unpleasant for us humans, they can be downright unhealthy for our loveable pups. Luckily The Bubbly Pug can help with all of these dirty problems to show your fur babies just how much you love them. A happy and healthy dog makes for an even happier and healthier human.

                    <br />
                    <br />

                    Create a personal Pawfile, book appointments, check-in, check-out, manage your memberships, and stay up to date with our newest offerings at The Bubbly Pug!

                    <br />
                    <br />

                    Our Bubbly groomers, state-of-the-art facilities and modern technology-driven approach to dog grooming makes for a streamlined, safe and fun experience for you and your pups.
                </p>
                <Image src="/images/hero-b.png" width={500} height={500} className="object-cover w-4/5 rounded-lg shadow-lg mb-14 xl:mb-11 md:w-2/3 lg:w-1/3" />
            </div>

            <div className="flex flex-col-reverse items-center justify-center mt-16 gap-x-10">
                <h2 className="text-h2">The Bubbly Team</h2>
                <Image src="/images/bubbly-pug-icon.png"
                    height={75}
                    width={75}
                // className={`${styles.icon} header__icon`}
                />
            </div>

            <div className="flex flex-col items-center gap-10 px-5 pt-10 pb-10 md:grid md:grid-cols-3 justify-items-center">
                {
                    team.map((team) => (
                        <article key={team.name} className="flex flex-col items-center gap-y-2">

                            <Image src={team.image} width={350} height={350} className="rounded-lg shadow-lg" />
                            <p>{team.name} - {team.position}</p>
                            {/* <p className='font-bold'>{team.position}</p> */}
                        </article>
                    ))
                }
            </div>
            {/* <Link href="/#meetAndGreet"><a className={styles.cta} type="submit"><FaPaw />Book a Meet and Greet!<FaPaw /></a></Link> */}
        </div >
    )
}

export default AboutComp