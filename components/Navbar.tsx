"use client";

import { useState, useEffect } from "react";
import localfont from "next/font/local";
import Link from "next/link";

const gothamBold = localfont({
    src: "../public/fonts/GothamBold.otf",
});

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 0);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={`${gothamBold.className} header-scrolled`}>
            <nav className="mx-8">
                <ul className="flex flex-row gap-6">
                    <li className="HomeButton">
                        <Link href="/">
                            <span className="nara">nara</span>230
                        </Link>
                    </li>
                    {/*mobile menu dropdown*/}
                    <div className="dropdown md:hidden">
                        <div tabIndex={0} role="button" className="btn btn-ghost rounded-field">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-5 w-5 stroke-current"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path> </svg>
                        </div>
                        <ul
                            className="menu dropdown-content fixed left-0 top-90 bg-black/90 w-full rounded-none z-[50] p-4 shadow-md text h-50">
                                <li><Link className="list" href="/">Home</Link></li>
                                <li><Link className="list" href="/gallery">Gallery</Link></li>
                                <li><Link className="list" href="/aboutme">About Me</Link></li>

                        </ul>
                    </div>

                    {/*desktop dropdown*/}
                    <div className="hidden md:flex flex-row gap-10 text-center ">
                        <Link className="list" href="/">Home</Link>
                        <Link className="list" href="/gallery">Gallery</Link>
                        <Link className="list" href="/aboutme">About Me</Link>
                    </div>

                    {/*<div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost rounded-field">Dropdown</div>
                            <ul
                              tabIndex="-1"
                              className="menu dropdown-content bg-base-200 rounded-box z-1 mt-4 w-52 p-2 shadow-sm">
                              <li><a>Item 1</a></li>
                              <li><a>Item 2</a></li>
                            </ul>
                          </div>*/}
                </ul>
            </nav>
        </header>
    );
}
