import { NextRequest, NextResponse } from "next/server"

import prismadb from "@/lib/prismadb";

import { getDataFromToken } from "@/helpers/get-data-from-token";

export async function POST(request: NextRequest) {
    const reqBody = await request.json()
    const { header, description, schools, collages } = reqBody

    try {
        const userId = await getDataFromToken(request)
        const user = await prismadb.user.findFirst({ where: { id: userId } })

        if (!user) {
            return new NextResponse("Unauthorized", { status: 405 })
        }

        const aboutMe = await prismadb.aboutMe.create({
            data: {
                header,
                description,
                schools,
                collages,

            }
        })

        return NextResponse.json(aboutMe)
    } catch (error) {
        console.log('[ABOUTME_POST]', error);
        return new NextResponse("Internal error", { status: 500 })
    }

}


export async function GET(
    request: NextRequest,
) {
    try {
        const aboutMe = await prismadb.aboutMe.findMany();
        return NextResponse.json(aboutMe);
    } catch (error) {
        console.log('[ABOUTME_GET]', error);
        return new NextResponse("Internal error", { status: 500 });
    }
};
