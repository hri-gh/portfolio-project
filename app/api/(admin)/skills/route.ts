import { NextRequest, NextResponse } from "next/server"

import prismadb from "@/lib/prismadb";

import { getDataFromToken } from "@/helpers/get-data-from-token";

export async function POST(request: NextRequest) {
    const reqBody = await request.json()
    const { name, imageUrl } = reqBody

    try {
        const userId = await getDataFromToken(request)
        const user = await prismadb.user.findFirst({ where: { id: userId } })

        if (!user) {
            return new NextResponse("Unauthorized", { status: 405 })
        }

        const skill = await prismadb.skill.create({
            data: {
               name,
               imageUrl
            }
        })

        return NextResponse.json(skill)
    } catch (error) {
        console.log('[SKILL_POST]', error);
        return new NextResponse("Internal error", { status: 500 })
    }

}


export async function GET(
    request: NextRequest,
) {
    try {
        const skill = await prismadb.skill.findMany();
        return NextResponse.json(skill);
    } catch (error) {
        console.log('[SKILLS_GET]', error);
        return new NextResponse("Internal error", { status: 500 });
    }
};
