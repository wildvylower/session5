import React, { useState } from 'react'
import { NavLink } from 'react-router'

export default function navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const linkStyle = ({ isActive }) => (
        isActive ?
            "text-violet-400 font-semibold transition-all" :
            "text-slate-400 hover:text-slate-200 transition-all"
    )

    return (
        <nav className="flex justify-center gap-6 sm:gap-8 px-6 py-4 border-b border-slate-800/60 bg-[#030014]/65 backdrop-blur-md sticky top-0 z-50 text-sm">
            <NavLink to="/" className={linkStyle}>Home</NavLink>
            <NavLink to="/clubs" className={linkStyle}>Clubs</NavLink>
            <NavLink to="/about" className={linkStyle}>About</NavLink>
        </nav>
    )
}