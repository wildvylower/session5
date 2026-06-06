import React from 'react'
import Navbar from '../components/navbar'

export default function About() {
    return (
        <main className="min-h-screen bg-[#030014] text-slate-200 flex flex-col">
            <Navbar />

            <div className="flex-1 max-w-4xl mx-auto px-6 py-16 w-full text-left">
                <div className="mb-12">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
                        About Student Club Hub
                    </h1>
                    <p className="text-lg text-slate-400 font-light leading-relaxed">
                        A modern, interactive portal designed to connect students with school organizations, showcase upcoming events, and facilitate collaboration.
                    </p>
                </div>

                <div className="mb-16">
                    <h2 className="text-2xl font-bold text-white mb-6 tracking-tight border-b border-slate-800 pb-2">
                        What the App Does
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-slate-900/10 border border-slate-850 p-6 rounded-2xl">
                            <div className="text-violet-400 font-bold mb-2">01. Explore Clubs</div>
                            <p className="text-sm text-slate-450 font-light leading-relaxed">
                                Browse a list of all active school clubs, complete with short descriptions and banner images.
                            </p>
                        </div>
                        <div className="bg-slate-900/10 border border-slate-850 p-6 rounded-2xl">
                            <div className="text-fuchsia-400 font-bold mb-2">02. Track Events</div>
                            <p className="text-sm text-slate-450 font-light leading-relaxed">
                                Stay up-to-date with schedules, contest dates, and workshop timings hosted by each club.
                            </p>
                        </div>
                        <div className="bg-slate-900/10 border border-slate-850 p-6 rounded-2xl">
                            <div className="text-indigo-400 font-bold mb-2">03. Join Communities</div>
                            <p className="text-sm text-slate-450 font-light leading-relaxed">
                                Join clubs instantly with persistent membership stored securely in your local browser storage.
                            </p>
                        </div>
                    </div>
                </div>

                <div>
                    <h2 className="text-2xl font-bold text-white mb-6 tracking-tight border-b border-slate-800 pb-2">
                        Tech Stack Used
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="flex gap-4 bg-slate-900/20 border border-slate-800 p-5 rounded-2xl hover:border-slate-750 transition-all duration-300">
                            <div className="h-10 w-10 shrink-0 rounded-lg bg-violet-600/10 border border-violet-500/20 flex items-center justify-center text-violet-450 font-bold">
                                R
                            </div>
                            <div>
                                <h3 className="font-semibold text-white text-sm">React (JSX)</h3>
                                <p className="text-xs text-slate-450 font-light leading-relaxed mt-1">
                                    Utilized for structuring reusable components, reactive state management, and handling conditional views.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4 bg-slate-900/20 border border-slate-800 p-5 rounded-2xl hover:border-slate-750 transition-all duration-300">
                            <div className="h-10 w-10 shrink-0 rounded-lg bg-fuchsia-600/10 border border-fuchsia-500/20 flex items-center justify-center text-fuchsia-450 font-bold">
                                T
                            </div>
                            <div>
                                <h3 className="font-semibold text-white text-sm">Tailwind CSS v4</h3>
                                <p className="text-xs text-slate-450 font-light leading-relaxed mt-1">
                                    Configured using the official Vite plugin to design a premium dark theme, neon accents, and interactive transitions.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4 bg-slate-900/20 border border-slate-800 p-5 rounded-2xl hover:border-slate-750 transition-all duration-300">
                            <div className="h-10 w-10 shrink-0 rounded-lg bg-indigo-600/10 border border-indigo-500/20 flex items-center justify-center text-indigo-450 font-bold">
                                RR
                            </div>
                            <div>
                                <h3 className="font-semibold text-white text-sm">React Router v7</h3>
                                <p className="text-xs text-slate-450 font-light leading-relaxed mt-1">
                                    Configured as a declarative client-side router supporting dynamic route mapping for homepage, clubs index, and club details.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4 bg-slate-900/20 border border-slate-800 p-5 rounded-2xl hover:border-slate-750 transition-all duration-300">
                            <div className="h-10 w-10 shrink-0 rounded-lg bg-cyan-600/10 border border-cyan-500/20 flex items-center justify-center text-cyan-450 font-bold">
                                LS
                            </div>
                            <div>
                                <h3 className="font-semibold text-white text-sm">Local Storage API</h3>
                                <p className="text-xs text-slate-450 font-light leading-relaxed mt-1">
                                    Provides persistent state across page reloads by checking and appending club registration status locally in the user's browser.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
