'use client'

import { projectUpdateInfoSubscribe } from 'next/dist/build/swc/generated-native'
import { useState } from 'react'

export default function EditFoodButton({
    food,
}: {
    food: any
}) {
    const [editing, setEditing] = useState(false)

    const [name, setName] = useState(food.name)
    const [carbs, setCarbs] = useState(food.carbs)
    const [calories, setCalories] = useState(food.calories)
    const [protein, setProtein] = useState(food.protein)
    const [fat, setFat] = useState(food.fat)
    const [servingSize, setServingSize] = useState(food.servingSize)

    async function saveFood() {
        await fetch('/api/foods', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: food.id,
                name,
                carbs,
                calories,
                protein,
                fat,
                servingSize,
            }),
        })

        window.location.reload()
    }

    if (!editing) {
        return (
            <button
                onClick={() => setEditing(true)}
                className='mt-2 rounded bg-blue-500 px-3 py-1 text-white'
            >
                Edit
            </button>
        )
    }

    return (
        <div className='mt-3 space-y-2'>
            <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className='border p-1 w-full'
            />

            <input
                type="number"
                value={carbs}
                onChange={(e) => setCarbs(Number(e.target.value))}
                className='border p-1 w-full'
            />

            <input
                type='number'
                value={calories}
                onChange={(e) => setCalories(Number(e.target.value))}
                className='border p-1 w-full'
            />

            <input
                type='number'
                value={protein}
                onChange={(e) => setProtein(Number(e.target.value))}
                className='border p-1 w-full'
            />

            <input
                type='number'
                value={fat}
                onChange={(e) => setFat(Number(e.target.value))}
                className='border p-1 w-full'
            />

            <input
                type='number'
                value={servingSize}
                onChange={(e) => setServingSize(Number(e.target.value))}
                className='border p-1 w-full'
            />

            <button
                onClick={saveFood}
                className='rounded bg-green-500 px-3 py-1 text-white'
            >
                Save
            </button>
        </div>
    )
}