import { NextRequest, NextResponse } from "next/server"

import prismadb from "@/lib/prismadb";

import { getDataFromToken } from "@/helpers/get-data-from-token";

export async function POST(request: NextRequest) {
    const reqBody = await request.json()
    const { imageUrl, platformName, platformLink} = reqBody

    try {
        const userId = await getDataFromToken(request)
        const user = await prismadb.user.findFirst({ where: { id: userId } })

        if (!user) {
            return new NextResponse("Unauthorized", { status: 405 })
        }

        const badge = await prismadb.badge.create({
            data: {
                imageUrl,
                platformName,
                platformLink,
            }
        })

        return NextResponse.json(badge)
    } catch (error) {
        console.log('[BADGE_POST]', error);
        return new NextResponse("Internal error", { status: 500 })
    }

}


export async function GET(
    request: NextRequest,
) {
    try {
        const badges = await prismadb.badge.findMany();
        return NextResponse.json(badges);
    } catch (error) {
        console.log('[BADGES_GET]', error);
        return new NextResponse("Internal error", { status: 500 });
    }
};
