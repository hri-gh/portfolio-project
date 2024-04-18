import { NextRequest, NextResponse } from "next/server"

import prismadb from "@/lib/prismadb";

import { getDataFromToken } from "@/helpers/get-data-from-token";

export async function POST(request: NextRequest) {
    const reqBody = await request.json()
    const { provider, title, imageUrl, providerLogoUrl } = reqBody

    try {
        const userId = await getDataFromToken(request)
        const user = await prismadb.user.findFirst({ where: { id: userId } })

        if (!user) {
            return new NextResponse("Unauthorized", { status: 405 })
        }

        const certificate = await prismadb.certificate.create({
            data: {
                provider,
                title,
                imageUrl,
                providerLogoUrl,

            }
        })

        return NextResponse.json(certificate)
    } catch (error) {
        console.log('[CERTIFICATE_POST]', error);
        return new NextResponse("Internal error", { status: 500 })
    }

}


export async function GET(
    request: NextRequest,
) {
    try {
        const certificates = await prismadb.certificate.findMany();
        return NextResponse.json(certificates);
    } catch (error) {
        console.log('[CERTIFICATES_GET]', error);
        return new NextResponse("Internal error", { status: 500 });
    }
};
