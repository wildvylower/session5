import React, { useState } from 'react'
import Navbar from '../components/navbar'
import ClubCard from '../components/club-card'
import { clubs } from '../data/club'

export default function Clubs() {
    const [sortBy, setSortBy] = useState('asc')
    const [viewMode, setViewMode] = useState('grid')

    const sortedClubs = [...clubs].sort((a, b) => {
        if (sortBy === 'asc') {
            return a.name.localeCompare(b.name)
        } else {
            return b.name.localeCompare(a.name)
        }
    })

    return (
        <main className="min-h-screen bg-[#030014] text-slate-200 flex flex-col">
            <Navbar />
            
            <div className="flex-1 max-w-7xl mx-auto px-6 py-12 w-full">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-10 text-left border-b border-slate-900 pb-8">
                    <div>
                        <h1 className="text-4xl font-extrabold text-white mb-2 tracking-tight">
                            Explore Student Clubs
                        </h1>
                        <p className="text-slate-400 font-light">
                            Discover the clubs active in our school community.
                        </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-4">
                        <div className="flex items-center gap-2">
                            <span className="text-xs text-slate-400 font-medium">Sort:</span>
                            <select 
                                value={sortBy} 
                                onChange={(e) => setSortBy(e.target.value)}
                                className="bg-slate-900 border border-slate-800 rounded-lg px-3 py-1.5 text-xs font-semibold text-slate-300 focus:outline-none focus:border-violet-500 transition-all cursor-pointer"
                            >
                                <option value="asc">Name A-Z</option>
                                <option value="desc">Name Z-A</option>
                            </select>
                        </div>

                        <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-lg border border-slate-800">
                            <button 
                                onClick={() => setViewMode('grid')}
                                className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all ${viewMode === 'grid' ? 'bg-violet-600 text-white' : 'text-slate-400 hover:text-slate-200'}`}
                            >
                                Grid
                            </button>
                            <button 
                                onClick={() => setViewMode('list')}
                                className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all ${viewMode === 'list' ? 'bg-violet-600 text-white' : 'text-slate-400 hover:text-slate-200'}`}
                            >
                                List
                            </button>
                        </div>
                    </div>
                </div>

                <div className={viewMode === 'grid' ? 'grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8' : 'flex flex-col gap-6 max-w-2xl mx-auto'}>
                    {sortedClubs.map((club) => (
                        <ClubCard key={club.id} club={club} />
                    ))}
                </div>
            </div>
        </main>
    )
}