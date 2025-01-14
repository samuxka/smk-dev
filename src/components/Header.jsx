/**
  * @copyright 2025 smk.dev
  * @license Apache-2.0
  */

import { Icon } from "@iconify/react";
import Navbar from "./Navbar"
import { useState } from "react"

const Header = () => {
    const [navOpen, setNavOpen] = useState(false)

    return (
        <header className="fixed top-0 left-0 w-full h-20 flex items-center z-40 bg-gradient-to-b from-zinc-900 to-zinc-900/0">
            <div className="max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center md:px-6 md:grid md:grid-cols-[1fr,3fr,1fr]">
                <h1>
                    <a href="/" className="logo flex gap-2 items-center group">
                        <div className="boxLogo bg-white w-9 h-9 flex items-center justify-center rounded-sm">
                           <p className="text-zinc-900 font-bold text-xl">S</p>
                        </div>
                        <p className="flex items-center">
                            <p className="text-lg">Samuka.dev</p>
                            <Icon icon="fluent-emoji:waving-hand" width="30" height="30" className="group-hover:animate-wave"/>
                        </p>
                    </a>
                </h1>

                <div className="relative md:justify-self-center">
                    <button
                        className="menu-btn md:hidden"
                        onClick={() => setNavOpen((prev) => !prev)}
                    >
                        <span className="material-symbols-rounded">
                            {navOpen ? 'close' : 'menu'}
                        </span>
                    </button>

                    <Navbar navOpen={navOpen}/>
                </div>

                <a 
                    href="#contact"
                    className="btn btn-secondary max-md:hidden md:justify-self-end"
                >   
                    Contact Me
                </a>
            </div>
        </header>
    )
}

export default Header