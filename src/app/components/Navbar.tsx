// src/components/Navbar.tsx
'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const Navbar = () => {
    const [currentPath, setCurrentPath] = useState('')

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setCurrentPath(window.location.pathname)
        }
    }, [])

    return (
        <nav className="py-4">
            <div className="container mx-auto flex justify-center">
                <div className="flex space-x-4 rounded-full bg-gray-700 p-2">
                    <Link href="/" scroll={false}>
                        <button
                            className={`px-4 py-2 text-lg ${
                                currentPath === '/'
                                    ? 'text-slate-100 gradient-background rounded-full'
                                    : 'text-gray-300 hover:text-white'
                            }`}
                        >
                            Home
                        </button>
                    </Link>
                    <Link href="/about" scroll={false}>
                        <button
                            className={`px-4 py-2 text-lg ${
                                currentPath === '/about'
                                    ? 'text-slate-100 gradient-background rounded-full'
                                    : 'text-gray-300 hover:text-white'
                            }`}
                        >
                            About
                        </button>
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
