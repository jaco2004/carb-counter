import { prisma } from '../../lib/prisma'
import FoodForm from '../../components/FoodForm'
import FoodCard from '../../components/FoodCard'
import DeleteFoodButton from '../../components/DeleteFoodButton'
import EditFoodButton from '../../components/EditFoodButton'

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
          <FoodCard
            key={food.id}
            food={food}
          />
        ))}
      </div>
    </main>
  )
}