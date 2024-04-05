import { NextRequest, NextResponse } from "next/server"

import prismadb from "@/lib/prismadb";

import { getDataFromToken } from "@/helpers/get-data-from-token";

export async function POST(request: NextRequest) {
    const reqBody = await request.json()
    const { title, header, classes, icon } = reqBody

    try {
        const userId = await getDataFromToken(request)
        const user = await prismadb.user.findFirst({ where: { id: userId } })

        if (!user) {
            return new NextResponse("Unauthorized", { status: 405 })
        }

        const gridContent = await prismadb.gridContent.create({
            data: {
                title,
                header,
                classes,
                icon,
            }
        })

        return NextResponse.json(gridContent)
    } catch (error) {
        console.log('[GRID-CONTENT_POST]', error);
        return new NextResponse("Internal error", { status: 500 })
    }

}


export async function GET(
    request: NextRequest,
) {
    try {
        const gridContents = await prismadb.gridContent.findMany();
        return NextResponse.json(gridContents);
    } catch (error) {
        console.log('[GRID-CONTENTS_GET]', error);
        return new NextResponse("Internal error", { status: 500 });
    }
};
