import React, { useState } from 'react'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'

const DashboardComp = () => {

    const history = [
        {
            id: 1,
            date: "07/10/2022",
            pets: [
                {
                    name: "Loki",
                },
                {
                    name: "Luna"
                }

            ],
        },
        {
            id: 2,
            date: "08/10/2022",
            pets: [
                {
                    id: 3,
                    name: "Loki",
                },
                {
                    id: 4,
                    name: "Tidus"
                },
                {
                    id: 5,
                    name: "Luna",
                },
                {
                    id: 6,
                    name: "Charlie"
                }

            ],
        },
        {
            id: 7,
            date: "09/10/2022",
            pets: [
                {
                    id: 8,
                    name: "Loki",
                },
                {
                    id: 9,
                    name: "Luna"
                },
                {
                    id: 10,
                    name: "Charlie",
                },
            ],
        },
    ]

    const { data: session } = useSession();
    const [dropdown, setDropdown] = useState(false);
    return (
        <main id="accountDashboardWrapper" className="mt-20 p-10 flex  flex-col justify-center items-center flex-[5] pb-24 ">
            <header className="flex flex-col items-center gap-y-4">
                <img src={session?.user.image} height={100} width={100} objectFit="cover" style={{ borderRadius: "50%" }} />
                <div className="flex flex-col items-center justify-center gap-x-12 gap-y-2">
                    <h1 className="text-4xl">{session?.user?.name}</h1>
                    <p className="text-lg">Bubbly Friend since 06/12/2018</p>
                </div>
            </header>

            <div className="mt-12 flex flex-col items-center gap-y-5 max-w-[200px] w-[98%]">
                <h2 className="text-2xl">Your Pet Profiles</h2>
                <Link href="/account/pet-profile">Loki</Link>
                <hr className='border border-slate-200 w-full' />
                <Link href="/account/pet-profile">Tidus</Link>
                <hr className='border border-slate-200 w-full' />
                <Link href="/account/pet-profile">Luna</Link>
                <hr className='border border-slate-200 w-full' />
                <Link href="/account/pet-profile">Charlie</Link>
                <hr className='border border-slate-200 w-full' />
            </div>

            {/* <hr style={{ width: "100%", marginTop: "30px", opacity: '0.2' }} /> */}

            <div className="mt-10 max-w-lg w-full">
                <h2 className="text-center mb-5 text-2xl">History</h2>

                <div id="gridWrapper" className="pt-1 grid grid-cols-2 shadow-lg rounded-l-lg">

                    <p className="text-xl text-center py-3">Date</p>
                    <p className="text-xl text-center py-3">Pet Name</p>


                    {/* The Grid Content div is what we would place inside of a .map() */}


                    {
                        history.map((h) => (
                            <div key={h.id} id="gridContent" className="grid grid-cols-2 w-full col-span-2 justify-items-center content-center mt-2 mb-0 odd:bg-[#dcf7ff9d]">
                                <div className="text-lg text-center p-2 self-center">
                                    <p>{h.date}</p>
                                </div>
                                <div className="grid grid-cols-2 justify-items-center gap-2 text-lg p-2 w-[90%]">
                                    {h.pets.map((pet) => (
                                        <>
                                            <Link key={pet.id} href="/account/pet-profile">{pet.name}</Link>
                                        </>
                                    ))}
                                </div>
                            </div>
                        ))
                    }

                    {/* <div className="">
                        <div className="">
                            <p>09/10/2022</p>
                        </div>
                        <div className="">
                            <Link href="/account/pet-profile">Loki</Link>
                        </div>
                    </div>

                    <div className="">
                        <div className="">
                            <p>10/10/2022</p>
                        </div>
                        <div className="">
                            <Link href="/account/pet-profile">Loki</Link>
                            <Link href="/account/pet-profile">Tidus</Link>
                        </div>
                    </div>

                    <div className="">
                        <div className="">
                            <p>11/10/2022</p>
                        </div>
                        <div className="">
                            <Link href="/account/pet-profile">Loki</Link>
                            <Link href="/account/pet-profile">Tidus</Link>
                            <Link href="/account/pet-profile">Luna</Link>
                            <Link href="/account/pet-profile">Charlie</Link>
                        </div>
                    </div> */}
                </div>

            </div>


        </main>
    )
}

export default DashboardComp