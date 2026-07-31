import React from 'react'

import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between border-b px-8 py-4">
            <h1 className="text-xl font-bold">DevSpace</h1>

            <div className="flex gap-6">
                <Link href="/" className="hover:text-blue-500">
                    Home
                </Link>

                <Link href="/about" className="hover:text-blue-500">
                    About
                </Link>

                <Link href="/communities" className="hover:text-blue-500">
                    Communities
                </Link>

                <Link href="/topics" className="hover:text-blue-500">
                    Topics
                </Link>

                <Link href="/developers" className="hover:text-blue-500">
                    Developers
                </Link>
            </div>
        </nav>
    )
}

export default Navbar