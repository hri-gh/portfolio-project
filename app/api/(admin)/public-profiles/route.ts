import { NextRequest, NextResponse } from "next/server"

import prismadb from "@/lib/prismadb";

import { getDataFromToken } from "@/helpers/get-data-from-token";

export async function POST(request: NextRequest) {
    const reqBody = await request.json()
    const { imageUrl, publicProfileLink, publicProfileName} = reqBody

    try {
        const userId = await getDataFromToken(request)
        const user = await prismadb.user.findFirst({ where: { id: userId } })

        if (!user) {
            return new NextResponse("Unauthorized", { status: 405 })
        }

        const publicProfile = await prismadb.publicProfile.create({
            data: {
                imageUrl,
                publicProfileName,
                publicProfileLink
            }
        })

        return NextResponse.json(publicProfile)
    } catch (error) {
        console.log('[PUBLIC_PROFILE_POST]', error);
        return new NextResponse("Internal error", { status: 500 })
    }

}


export async function GET(
    request: NextRequest,
) {
    try {
        const publicProfiles = await prismadb.publicProfile.findMany();
        return NextResponse.json(publicProfiles);
    } catch (error) {
        console.log('[PUBLIC_PROFILES_GET]', error);
        return new NextResponse("Internal error", { status: 500 });
    }
};
