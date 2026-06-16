'use client'

import { useState } from 'react'
import DeleteFoodButton from './DeleteFoodButton'
import EditFoodButton from './EditFoodButton'

export default function FoodCard({
    food,
}: {
    food: any
}) {
    const [expanded, setExpanded] = useState(false)

    return (
        <div className='border p-4 rounded'>
            <button
                onClick={() => setExpanded(!expanded)}
                className='w-full text-left'
            >
                <p className='font-semibold'>{food.name}</p>

                <p className='text-sm text-gray-600'>
                    {food.carbs}g carbs • {food.calories} kcal
                </p>
            </button>
            {expanded && (
                <div className='mt-4 space-y-2'>
                    <p>Serving Size: {food.servingSize}g</p>
                    <p>Calories: {food.calories}</p>
                    <p>Protein: {food.protein}</p>
                    <p>Carbs: {food.carbs}</p>
                    <p>Fat: {food.fat}</p>

                    <div className='flex gap-2 pt-2'>
                        <EditFoodButton food={food} />
                        <DeleteFoodButton id={food.id} />
                    </div>
                </div>
            )}
        </div>
    )
}