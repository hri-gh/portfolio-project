import { getDataFromToken } from "@/helpers/get-data-from-token";
import prismadb from "@/lib/prismadb";
import { NextRequest, NextResponse } from "next/server"

export async function GET(
    request: Request,
    { params }: { params: { contentId: string } }
) {
    try {
        if (!params.contentId) {
            return new NextResponse("Grid Content id is required", { status: 400 });
        }

        const gridContent = await prismadb.gridContent.findUnique({
            where: {
                id: params.contentId
            }
        });

        return NextResponse.json(gridContent);
    } catch (error) {
        console.log('[GRID-CONTENT_GET]', error);
        return new NextResponse("Internal error", { status: 500 });
    }
};


export async function DELETE(
    request: NextRequest,
    { params }: { params: { contentId: string } }
) {
    try {
        const userId = await getDataFromToken(request)
        const user = await prismadb.user.findFirst({ where: { id: userId } })

        if (!user) {
            return new NextResponse("Unauthorized", { status: 405 })
        }

        if (!params.contentId) {
            return new NextResponse("Grid Content id is required", { status: 400 });
        }

        const gridContent = await prismadb.gridContent.delete({
            where: {
                id: params.contentId,
            }
        });

        return NextResponse.json(gridContent);
    } catch (error) {
        console.log('[GRID-CONTENT_DELETE]', error);
        return new NextResponse("Internal error", { status: 500 });
    }
}
export async function PATCH(
    request: NextRequest,
    { params }: { params: { contentId: string } }
) {
    const reqBody = await request.json()
    const { title, header, classes, icon } = reqBody

    try {
        const userId = await getDataFromToken(request)
        const user = await prismadb.user.findFirst({ where: { id: userId } })

        if (!user) {
            return new NextResponse("Unauthorized", { status: 405 })
        }

        if (!params.contentId) {
            return new NextResponse("Grid Content id is required", { status: 400 });
        }

        const gridContent = await prismadb.gridContent.update({
            where: {
                id: params.contentId,
            },
            data: {
                title,
                header,
                classes,
                icon,
            }
        });

        return NextResponse.json(gridContent);
    } catch (error) {
        console.log('[GRID-CONTENT_PATCH]', error);
        return new NextResponse("Internal error", { status: 500 });
    }
}
