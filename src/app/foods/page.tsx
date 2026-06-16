import { prisma } from '../../lib/prisma'
import FoodForm from '../../components/FoodForm'
import DeleteFoodButton from '../../components/DeleteFoodButton'

export default async function FoodsPage() {
  const foods = await prisma.food.findMany()

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold">Foods</h1>

      <p className="mt-2 text-gray-600">
        Add and manage your food database.
      </p>

      <div className='mt-6'>
        <FoodForm />
      </div>

      <div className="mt-6 space-y-3">
        {foods.map((food) => (
          <div key={food.id} className="border p-4 rounded">
            <p className="font-semibold">{food.name}</p>
          
            <p className="text-sm text-gray-600">
              {food.carbs}g carbs • {food.calories} kcal
            </p>
          
            <DeleteFoodButton id={food.id} />
          </div>
        ))}
      </div>
    </main>
  )
}