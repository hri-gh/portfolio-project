import { getDataFromToken } from "@/helpers/get-data-from-token";
import prismadb from "@/lib/prismadb";
import { NextRequest, NextResponse } from "next/server"

export async function GET(
    request: Request,
    { params }: { params: { publicProfileId: string } }
) {
    try {
        if (!params.publicProfileId) {
            return new NextResponse("Public profile id is required", { status: 400 });
        }

        const publicProfile = await prismadb.publicProfile.findUnique({
            where: {
                id: params.publicProfileId
            }
        });

        return NextResponse.json(publicProfile);
    } catch (error) {
        console.log('[PUBLIC_PROFILE_ID_GET]', error);
        return new NextResponse("Internal error", { status: 500 });
    }
};


export async function DELETE(
    request: NextRequest,
    { params }: { params: { publicProfileId: string } }
) {
    try {
        const userId = await getDataFromToken(request)
        const user = await prismadb.user.findFirst({ where: { id: userId } })

        if (!user) {
            return new NextResponse("Unauthorized", { status: 405 })
        }

        if (!params.publicProfileId) {
            return new NextResponse("Public profile id is required", { status: 400 });
        }

        const publicProfile = await prismadb.publicProfile.delete({
            where: {
                id: params.publicProfileId,
            }
        });

        return NextResponse.json(publicProfile);
    } catch (error) {
        console.log('[PUBLIC_PROFILE_DELETE]', error);
        return new NextResponse("Internal error", { status: 500 });
    }
}

export async function PATCH(
    request: NextRequest,
    { params }: { params: { publicProfileId: string } }
) {
    const reqBody = await request.json()
    const { publicProfileName, publicProfileLink, imageUrl } = reqBody

    try {
        const userId = await getDataFromToken(request)
        const user = await prismadb.user.findFirst({ where: { id: userId } })

        if (!user) {
            return new NextResponse("Unauthorized", { status: 405 })
        }

        if (!params.publicProfileId) {
            return new NextResponse("Public profile id is required", { status: 400 });
        }

        const publicProfile = await prismadb.publicProfile.update({
            where: {
                id: params.publicProfileId,
            },
            data: {
                publicProfileName,
                publicProfileLink,
                imageUrl,
            }
        });

        return NextResponse.json(publicProfile);
    } catch (error) {
        console.log('[PUBLIC_PROFILE_PATCH]', error);
        return new NextResponse("Internal error", { status: 500 });
    }
}
