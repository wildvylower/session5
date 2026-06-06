import { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router'
import { FaChevronLeft } from 'react-icons/fa'
import Navbar from '../components/navbar'
import { clubs } from '../data/club'

export default function Details() {
    const { id } = useParams()
    const navigate = useNavigate()
    const club = clubs.find((c) => c.id === id)

    const [isJoined, setIsJoined] = useState(false)
    const [showConfirmation, setShowConfirmation] = useState(false)

    useEffect(() => {
        const joined = JSON.parse(localStorage.getItem('joined_clubs') || '[]')
        if (joined.includes(id)) {
            setIsJoined(true)
        }
    }, [id])

    const handleJoin = () => {
        const joined = JSON.parse(localStorage.getItem('joined_clubs') || '[]')
        if (!joined.includes(id)) {
            const newJoined = [...joined, id]
            localStorage.setItem('joined_clubs', JSON.stringify(newJoined))
            setIsJoined(true)
            setShowConfirmation(true)
            setTimeout(() => {
                setShowConfirmation(false)
            }, 3000)
        }
    }

    if (!club) {
        return (
            <main className="min-h-screen bg-[#030014] text-slate-200 flex flex-col">
                <Navbar />
                <div className="flex-1 flex flex-col justify-center items-center text-center px-6">
                    <h1 className="text-3xl font-extrabold text-white mb-4">Club Not Found</h1>
                    <Link to="/clubs" className="text-sm text-violet-400 hover:underline">
                        Back to Clubs
                    </Link>
                </div>
            </main>
        )
    }

    return (
        <main className="min-h-screen bg-[#030014] text-slate-200 flex flex-col">
            <Navbar />

            {showConfirmation && (
                <div className="fixed top-20 right-6 z-50 animate-bounce bg-gradient-to-r from-violet-600 to-fuchsia-600 border border-violet-500 text-white px-6 py-3.5 rounded-xl shadow-2xl flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-sm font-semibold">Success! You joined {club.name}.</span>
                </div>
            )}

            <div className="flex-1 max-w-6xl mx-auto px-6 py-12 w-full">
                <button onClick={() => navigate('/clubs')} className="w-10 h-10 rounded-lg bg-violet-600 text-white hover:bg-violet-700 shadow-lg shadow-violet-600/20 mb-8 transition-all cursor-pointer flex items-center justify-center hover:scale-105 active:scale-95">
                    <FaChevronLeft className="w-4 h-4" />
                </button>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-4">
                    <div className="lg:col-span-5 w-full flex justify-center items-center">
                        <div className="w-full rounded-2xl border border-slate-800/60 bg-slate-900/10 p-2 overflow-hidden shadow-2xl shadow-violet-500/5">
                            <img src={club.image} alt={club.name} className="w-full h-80 md:h-96 object-cover rounded-xl opacity-95" />
                        </div>
                    </div>

                    <div className="lg:col-span-7 flex flex-col items-start text-left">
                        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight leading-none">
                            {club.name}
                        </h1>

                        <p className="text-base md:text-lg text-slate-400 leading-relaxed font-light mb-8">
                            {club.description}
                        </p>

                        <div className="w-full mb-8">
                            <h3 className="text-lg font-bold text-white mb-4 border-b border-slate-800 pb-2">
                                Upcoming Events
                            </h3>
                            <div className="flex flex-col gap-3">
                                {club.events.map((event, index) => (
                                    <div key={index} className="flex flex-col sm:flex-row gap-2 sm:justify-between sm:items-center bg-slate-900/20 border border-slate-850 p-4 rounded-xl hover:border-slate-800 transition-all items-start">
                                        <span className="font-medium text-slate-200 text-sm">{event.name}</span>
                                        <span className="text-xs text-violet-400 bg-violet-400/10 px-3 py-1.5 rounded-full font-semibold w-fit">
                                            {event.date}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="w-full">
                            {isJoined ? (
                                <button disabled className="w-full rounded-full bg-slate-900/50 border border-slate-800 text-slate-400 py-3.5 text-sm font-semibold cursor-not-allowed">
                                    You have joined this club!
                                </button>
                            ) : (
                                <button onClick={handleJoin} className="w-full glow-button rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 py-3.5 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer">
                                    Join Club
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
