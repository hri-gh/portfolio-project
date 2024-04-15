import { NextRequest, NextResponse } from "next/server"

import prismadb from "@/lib/prismadb";

import { getDataFromToken } from "@/helpers/get-data-from-token";

export async function POST(request: NextRequest) {
    const reqBody = await request.json()
    const { header, description } = reqBody

    try {
        const userId = await getDataFromToken(request)
        const user = await prismadb.user.findFirst({ where: { id: userId } })

        if (!user) {
            return new NextResponse("Unauthorized", { status: 405 })
        }

        const learningJourney = await prismadb.learningJourney.create({
            data: {
                header,
                description,
            }
        })

        return NextResponse.json(learningJourney)
    } catch (error) {
        console.log('[LEARNING_JOURNEY_POST]', error);
        return new NextResponse("Internal error", { status: 500 })
    }

}


export async function GET(
    request: NextRequest,
) {
    try {
        const learningJourney = await prismadb.learningJourney.findMany();
        return NextResponse.json(learningJourney);
    } catch (error) {
        console.log('[LEARNING_JOURNEY_GET]', error);
        return new NextResponse("Internal error", { status: 500 });
    }
};
