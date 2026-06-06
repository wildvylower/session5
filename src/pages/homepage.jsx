import React from 'react'
import { Link } from 'react-router'
import Navbar from '../components/navbar'
import heroImg from '../assets/hero.jpg'

export default function Homepage() {
    return (
        <main className="min-h-screen bg-[#030014] text-slate-200 flex flex-col">
            <Navbar />

            <div className="flex-1 max-w-7xl mx-auto px-6 py-12 md:py-20 flex flex-col md:flex-row items-center justify-between gap-12 w-full">
                <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight mb-6">
                        Find Your Passion. <br />
                        <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent">
                            Build Your Future.
                        </span>
                    </h1>
                    <h3 className="text-sm sm:text-base md:text-lg text-slate-400 max-w-xl leading-relaxed font-light mb-10">
                        Explore your potential beyond the classroom. Join student clubs ranging from technology and sports to arts and music, and start your exciting journey today!
                    </h3>
                    <Link to="/clubs" className="glow-button rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer">
                        Explore Clubs
                    </Link>
                </div>

                <div className="flex-1 w-full flex justify-center items-center">
                    <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg aspect-[16/10] rounded-2xl border border-slate-800/60 bg-slate-900/10 p-2 overflow-hidden shadow-2xl shadow-violet-500/5 hover:scale-[1.01] transition-transform duration-500">
                        <img src={heroImg} alt="Hero" className="w-full h-full object-cover object-center rounded-xl opacity-95" />
                    </div>
                </div>
            </div>
        </main>
    )
}