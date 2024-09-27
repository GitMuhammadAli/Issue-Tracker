"use client"
import Link from 'next/link'
import React from 'react'
import { IoBug } from "react-icons/io5";
import { usePathname } from 'next/navigation'

const Navbar = () => {
    const currentpath = usePathname()

    const Links = [
        { label: 'Dashboard', href: '/dashboard' },
        { label: 'Issues', href: '/issues' },
        { label: 'Reports', href: '/reports' },
        { label: 'Team Management', href: '/team-management' },
        { label: 'Profile', href: '/profile' },
    ]

    return (
        <nav className="bg-lime-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/" className="text-white text-3xl font-bold "><IoBug /></Link>
                <ul className="flex space-x-4">
                    {Links.map(link => (
                        <li key={link.href}>
                            <Link href={link.href} className={`${link.href === currentpath ? "text-zinc-950 " : "text-white"} hover:text-gray-300 transition duration-300`}>
                                {link.label}
                            </Link>
                        </li>
                    ))}
                    <li>
                        <Link href="/signin" className={`${'/signin' === currentpath ? "text-zinc-950 " : "text-white"} hover:text-gray-300 transition duration-300`}>
                            Sign In
                        </Link>
                    </li>
                    <li>
                        <Link href="/signup" className={`${'/signup' === currentpath ? "text-zinc-950 " : "text-white"} hover:text-gray-300 transition duration-300`}>
                            Sign Up
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar