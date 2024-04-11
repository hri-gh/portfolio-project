import { getDataFromToken } from "@/helpers/get-data-from-token";
import prismadb from "@/lib/prismadb";
import { NextRequest, NextResponse } from "next/server"

export async function GET(
    request: Request,
    { params }: { params: { overviewId: string } }
) {
    try {
        if (!params.overviewId) {
            return new NextResponse("Overview id is required", { status: 400 });
        }

        const overview = await prismadb.overview.findUnique({
            where: {
                id: params.overviewId
            }
        });

        return NextResponse.json(overview);
    } catch (error) {
        console.log('[OVERVIEW_ID_GET]', error);
        return new NextResponse("Internal error", { status: 500 });
    }
};


export async function DELETE(
    request: NextRequest,
    { params }: { params: { overviewId: string } }
) {
    try {
        const userId = await getDataFromToken(request)
        const user = await prismadb.user.findFirst({ where: { id: userId } })

        if (!user) {
            return new NextResponse("Unauthorized", { status: 405 })
        }

        if (!params.overviewId) {
            return new NextResponse("Overview id is required", { status: 400 });
        }

        const overview = await prismadb.overview.delete({
            where: {
                id: params.overviewId,
            }
        });

        return NextResponse.json(overview);
    } catch (error) {
        console.log('[OVERVIEW_DELETE]', error);
        return new NextResponse("Internal error", { status: 500 });
    }
}

export async function PATCH(
    request: NextRequest,
    { params }: { params: { overviewId: string } }
) {
    const reqBody = await request.json()
    const { header, description } = reqBody

    try {
        const userId = await getDataFromToken(request)
        const user = await prismadb.user.findFirst({ where: { id: userId } })

        if (!user) {
            return new NextResponse("Unauthorized", { status: 405 })
        }

        if (!params.overviewId) {
            return new NextResponse("Overview id is required", { status: 400 });
        }

        const overview = await prismadb.overview.update({
            where: {
                id: params.overviewId,
            },
            data: {
                header,
                description
            }
        });

        return NextResponse.json(overview);
    } catch (error) {
        console.log('[OVERVIEW_PATCH]', error);
        return new NextResponse("Internal error", { status: 500 });
    }
}
