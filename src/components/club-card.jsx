import React from 'react'
import { Link } from 'react-router'

export default function ClubCard({ club }) {
    return (
        <div className="group relative rounded-2xl border border-slate-800/80 bg-slate-900/30 p-2 overflow-hidden hover:border-slate-700/80 hover:shadow-2xl hover:shadow-violet-500/5 transition-all duration-300 flex flex-col justify-between">
            <div>
                <div className="overflow-hidden rounded-xl h-48 w-full bg-slate-950 relative">
                    <img
                        src={club.image}
                        alt={club.name}
                        className="h-full w-full object-cover transition-all duration-500 group-hover:scale-105 group-hover:opacity-95 opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                </div>

                <div className="p-5">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-violet-400 transition-colors">
                        {club.name}
                    </h3>
                    <p className="text-sm text-slate-400 mb-6 font-light leading-relaxed line-clamp-2">
                        {club.shortDescription}
                    </p>
                </div>
            </div>

            <div className="px-5 pb-5 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between border-t border-slate-800/80 pt-4">
                <span className="text-xs text-violet-400 font-medium">
                    {club.events?.length || 0} Upcoming Events
                </span>
                <Link
                    to={`/clubs/${club.id}`}
                    className="text-xs font-semibold text-slate-200 bg-white/5 hover:bg-violet-600 hover:text-white px-3.5 py-2 rounded-lg border border-slate-800 hover:border-violet-500 transition-all w-full sm:w-auto text-center"
                >
                    View Detail
                </Link>
            </div>
        </div>
    )
}
