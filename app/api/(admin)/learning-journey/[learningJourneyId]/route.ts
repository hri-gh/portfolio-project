import { getDataFromToken } from "@/helpers/get-data-from-token";
import prismadb from "@/lib/prismadb";
import { NextRequest, NextResponse } from "next/server"

export async function GET(
    request: Request,
    { params }: { params: { learningJourneyId: string } }
) {
    try {
        if (!params.learningJourneyId) {
            return new NextResponse("Learning Journey id is required", { status: 400 });
        }

        const learningJourney = await prismadb.learningJourney.findUnique({
            where: {
                id: params.learningJourneyId
            }
        });

        return NextResponse.json(learningJourney);
    } catch (error) {
        console.log('[LEARNING_JOURNEY_ID_GET]', error);
        return new NextResponse("Internal error", { status: 500 });
    }
};


export async function DELETE(
    request: NextRequest,
    { params }: { params: { learningJourneyId: string } }
) {
    try {
        const userId = await getDataFromToken(request)
        const user = await prismadb.user.findFirst({ where: { id: userId } })

        if (!user) {
            return new NextResponse("Unauthorized", { status: 405 })
        }

        if (!params.learningJourneyId) {
            return new NextResponse("Learning Journey id is required", { status: 400 });
        }

        const learningJourney = await prismadb.learningJourney.delete({
            where: {
                id: params.learningJourneyId,
            }
        });

        return NextResponse.json(learningJourney);
    } catch (error) {
        console.log('[LEARNING_JOURNEY_ID_DELETE]', error);
        return new NextResponse("Internal error", { status: 500 });
    }
}

export async function PATCH(
    request: NextRequest,
    { params }: { params: { learningJourneyId: string } }
) {
    const reqBody = await request.json()
    const { header, description } = reqBody

    try {
        const userId = await getDataFromToken(request)
        const user = await prismadb.user.findFirst({ where: { id: userId } })

        if (!user) {
            return new NextResponse("Unauthorized", { status: 405 })
        }

        if (!params.learningJourneyId) {
            return new NextResponse("Learning Journey id is required", { status: 400 });
        }

        const learningJourney = await prismadb.learningJourney.update({
            where: {
                id: params.learningJourneyId,
            },
            data: {
                header,
                description
            }
        });

        return NextResponse.json(learningJourney);
    } catch (error) {
        console.log('[LEARNING_JOURNEY_ID_PATCH]', error);
        return new NextResponse("Internal error", { status: 500 });
    }
}
