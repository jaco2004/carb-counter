import { prisma } from "@/src/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const body = await request.json()

    const food = await prisma.food.create({
        data: {
            name: body.name,
            servingSize: Number(body.servingSize),
            carbs: Number(body.carbs),
            calories: Number(body.calories),
            protein: Number(body.protein),
            fat: Number(body.fat),
        },
    })

    return NextResponse.json(food)
}