import { getDataFromToken } from "@/helpers/get-data-from-token";
import prismadb from "@/lib/prismadb";
import { NextRequest, NextResponse } from "next/server"

export async function GET(
    request: Request,
    { params }: { params: { certificateId: string } }
) {
    try {
        if (!params.certificateId) {
            return new NextResponse("Certificate id is required", { status: 400 });
        }

        const certificate = await prismadb.certificate.findUnique({
            where: {
                id: params.certificateId
            }
        });

        return NextResponse.json(certificate);
    } catch (error) {
        console.log('[CERTIFICATE_ID_GET]', error);
        return new NextResponse("Internal error", { status: 500 });
    }
};


export async function DELETE(
    request: NextRequest,
    { params }: { params: { certificateId: string } }
) {
    try {
        const userId = await getDataFromToken(request)
        const user = await prismadb.user.findFirst({ where: { id: userId } })

        if (!user) {
            return new NextResponse("Unauthorized", { status: 405 })
        }

        if (!params.certificateId) {
            return new NextResponse("Certificate id is required", { status: 400 });
        }

        const certificate = await prismadb.certificate.delete({
            where: {
                id: params.certificateId,
            }
        });

        return NextResponse.json(certificate);
    } catch (error) {
        console.log('[CERTIFICATE_DELETE]', error);
        return new NextResponse("Internal error", { status: 500 });
    }
}

export async function PATCH(
    request: NextRequest,
    { params }: { params: { certificateId: string } }
) {
    const reqBody = await request.json()
    const { provider, title, imageUrl, providerLogoUrl } = reqBody

    try {
        const userId = await getDataFromToken(request)
        const user = await prismadb.user.findFirst({ where: { id: userId } })

        if (!user) {
            return new NextResponse("Unauthorized", { status: 405 })
        }

        if (!params.certificateId) {
            return new NextResponse("Certificate id is required", { status: 400 });
        }

        const certificate = await prismadb.certificate.update({
            where: {
                id: params.certificateId,
            },
            data: {
                provider,
                title,
                imageUrl,
                providerLogoUrl,
            }
        });

        return NextResponse.json(certificate);
    } catch (error) {
        console.log('[CERTIFICATE_PATCH]', error);
        return new NextResponse("Internal error", { status: 500 });
    }
}
