import { getDataFromToken } from "@/helpers/get-data-from-token";
import prismadb from "@/lib/prismadb";
import { NextRequest, NextResponse } from "next/server"

export async function GET(
    request: Request,
    { params }: { params: { badgeId: string } }
) {
    try {
        if (!params.badgeId) {
            return new NextResponse("Badge id is required", { status: 400 });
        }

        const badge = await prismadb.badge.findUnique({
            where: {
                id: params.badgeId
            }
        });

        return NextResponse.json(badge);
    } catch (error) {
        console.log('[BADGE_ID_GET]', error);
        return new NextResponse("Internal error", { status: 500 });
    }
};


export async function DELETE(
    request: NextRequest,
    { params }: { params: { badgeId: string } }
) {
    try {
        const userId = await getDataFromToken(request)
        const user = await prismadb.user.findFirst({ where: { id: userId } })

        if (!user) {
            return new NextResponse("Unauthorized", { status: 405 })
        }

        if (!params.badgeId) {
            return new NextResponse("Badge id is required", { status: 400 });
        }

        const badge = await prismadb.badge.delete({
            where: {
                id: params.badgeId,
            }
        });

        return NextResponse.json(badge);
    } catch (error) {
        console.log('[BADGE_DELETE]', error);
        return new NextResponse("Internal error", { status: 500 });
    }
}

export async function PATCH(
    request: NextRequest,
    { params }: { params: { badgeId: string } }
) {
    const reqBody = await request.json()
    const { imageUrl, platformName, platformLink} = reqBody

    try {
        const userId = await getDataFromToken(request)
        const user = await prismadb.user.findFirst({ where: { id: userId } })

        if (!user) {
            return new NextResponse("Unauthorized", { status: 405 })
        }

        if (!params.badgeId) {
            return new NextResponse("Badge id is required", { status: 400 });
        }

        const badge = await prismadb.badge.update({
            where: {
                id: params.badgeId,
            },
            data: {
                imageUrl,
                platformName,
                platformLink,
            }
        });

        return NextResponse.json(badge);
    } catch (error) {
        console.log('[BADGE_PATCH]', error);
        return new NextResponse("Internal error", { status: 500 });
    }
}
