import React from 'react'
import trashcash from "../assets/trashcash.jpeg"
import rikshaw from '../assets/rikshaw.jpeg'
import raddi from "../assets/raddi.jpeg"
import digitalscale from '../assets/digitalscale.jpeg'
import beforeafter from '../assets/beforeafter.jpeg'
import van from '../assets/van.jpeg'

const Gallery: React.FC = () => {
    const images = [rikshaw, trashcash, raddi, digitalscale, beforeafter, van]

    return (
        <section className="max-w-6xl mx-auto py-16 px-4">
            <h2 className="text-3xl font-semibold text-center mb-8">RaddiGo ka kaam aur zindagi</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {images.map((src, idx) => (
                    <div key={idx} className="overflow-hidden rounded-lg shadow-sm">
                        <img src={src} alt={`gallery-${idx}`} className="w-full h-48 object-cover" />
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Gallery
