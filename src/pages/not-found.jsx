import React from 'react'
import { Link } from 'react-router'
import Navbar from '../components/navbar'

export default function NotFound() {
    return (
        <main className="min-h-screen bg-[#030014] text-slate-200 flex flex-col">
            <Navbar />

            <div className="flex-1 flex flex-col justify-center items-center text-center px-6 py-20">
                <div className="text-8xl md:text-9xl font-extrabold tracking-tight bg-gradient-to-r from-violet-500 via-fuchsia-500 to-indigo-500 bg-clip-text text-transparent mb-6 animate-pulse">
                    404
                </div>
                <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">
                    Lost in Space?
                </h1>
                <p className="text-sm md:text-base text-slate-400 max-w-md leading-relaxed font-light mb-10">
                    The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                </p>
                <Link to="/" className="glow-button rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer">
                    Back to Home
                </Link>
            </div>
        </main>
    )
}
