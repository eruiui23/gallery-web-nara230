"use client"

import { useState, useEffect } from "react"
import localfont from "next/font/local"
import Link from "next/link"

const gothamBold = localfont({
    src: '../public/fonts/GothamBold.otf',
})

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 0)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header className={`${gothamBold.className} ${scrolled ? 'header-scrolled ' : ''}`}>
            <nav className="mx-8">
                <ul>
                    <li className="HomeButton">
                        <Link href="/"><span className="nara">nara</span>230</Link>
                    </li>
                    <div className="flex gap-10">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/gallery">Gallery</Link></li>
                        <li><Link href="/aboutme">About Me</Link></li>
                    </div>
                </ul>
            </nav>
        </header>
    )
}
