'use client'

import { use, useState } from 'react'

export default function FoodForm() {
    const [name, setName] = useState('')
    const [carbs, setCarbs] = useState('')
    const [calories, setCalories] = useState('')
    const [protein, setProtein] = useState('')
    const [fat, setFat] = useState('')
    const [servingSize, setServingSize] = useState('')

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault()

        await fetch('/api/foods', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name,
                carbs,
                calories,
                protein,
                fat,
                servingSize,
            }),
        })

        setName('')
        setCarbs('')
        setCalories('')
        setProtein('')
        setFat('')
        setServingSize('')

        window.location.reload()
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-3">
            <input
                placeholder="Food name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border p-2 w-full"
            />

            <input
                placeholder="Serving Size"
                value={servingSize}
                onChange={(e) => setServingSize(e.target.value)}
                className='border p-2 w-full'
            />

            <input
                placeholder="Carbs"
                value={carbs}
                onChange={(e) => setCarbs(e.target.value)}
                className='border p-2 w-full'
            />

            <input
                placeholder="Calories"
                value={calories}
                onChange={(e) => setCalories(e.target.value)}
                className='border p-2 w-full'
            />

            <input
                placeholder="Protein"
                value={protein}
                onChange={(e) => setProtein(e.target.value)}
                className='border p-2 w-full'
            />

            <input
                placeholder="Fat"
                value={fat}
                onChange={(e) => setFat(e.target.value)}
                className='border p-2 w-full'
            />

            <button
                type="submit"
                className='bg-black text-white px-4 py-2 rounded'
            >
                Add Food
            </button>
        </form>
    )
}