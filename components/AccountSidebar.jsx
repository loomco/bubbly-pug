import React from 'react'
import Link from 'next/link'
import { useSession } from 'next-auth/react';


const AccountSidebar = () => {
    const { data: session } = useSession();

    return (
        <aside className="hidden lg:pt-16 mt-24 w-60 bg-[#001B26] text-white lg:flex flex-col items-center gap-y-10">
            <h2 className="text-center text-2xl">Welcome Back! <br /> {session.user.name}</h2>
            <ul className="flex flex-col items-center gap-y-7 text-lg relative z-10">
                <li><Link href="/account/dashboard"><a className="text-white">Dashboard</a></Link></li>
                <li><Link href="/account/pet-profile"><a className="text-white">View Pet Pawfile</a></Link></li>
                <li><Link href="/account/create-pet-profile"><a className="text-white">Create a new Pawfile</a></Link></li>
            </ul>
        </aside>
    )
}

export default AccountSidebar