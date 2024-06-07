import { getDataFromToken } from "@/helpers/get-data-from-token";
import prismadb from "@/lib/prismadb";
import { NextRequest, NextResponse } from "next/server"

export async function GET(
    request: Request,
    { params }: { params: { aboutmeId: string } }
) {
    try {
        if (!params.aboutmeId) {
            return new NextResponse("AboutMe id is required", { status: 400 });
        }

        const aboutMe = await prismadb.aboutMe.findUnique({
            where: {
                id: params.aboutmeId
            }
        });

        return NextResponse.json(aboutMe);
    } catch (error) {
        console.log('[ABOUTME_ID_GET]', error);
        return new NextResponse("Internal error", { status: 500 });
    }
};


export async function DELETE(
    request: NextRequest,
    { params }: { params: { aboutmeId: string } }
) {
    try {
        const userId = await getDataFromToken(request)
        const user = await prismadb.user.findFirst({ where: { id: userId } })

        if (!user) {
            return new NextResponse("Unauthorized", { status: 405 })
        }

        if (!params.aboutmeId) {
            return new NextResponse("AboutMe id is required", { status: 400 });
        }

        const aboutMe = await prismadb.aboutMe.delete({
            where: {
                id: params.aboutmeId,
            }
        });

        return NextResponse.json(aboutMe);
    } catch (error) {
        console.log('[ABOUTME_DELETE]', error);
        return new NextResponse("Internal error", { status: 500 });
    }
}

export async function PATCH(
    request: NextRequest,
    { params }: { params: { aboutmeId: string } }
) {
    const reqBody = await request.json()
    const {
        name,
        location,
        bio,
        aboutMeHeader,
        aboutMeDescription,
        schools,
        collages,
        overview,
        overviewHeader,
        learningJourney,
        learningJourneyHeader,
        linkedinUrl,
        githubUrl,
        whatsappUrl,
        instagramUrl,
        facebookUrl,
        primaryGmail,
        secondaryGmail,
        mobileNumber,
        anonymousMessageUrl,
    } = reqBody

    try {
        const userId = await getDataFromToken(request)
        const user = await prismadb.user.findFirst({ where: { id: userId } })

        if (!user) {
            return new NextResponse("Unauthorized", { status: 405 })
        }

        if (!params.aboutmeId) {
            return new NextResponse("AboutMe id is required", { status: 400 });
        }

        const aboutMe = await prismadb.aboutMe.update({
            where: {
                id: params.aboutmeId,
            },
            data: {
                name,
                location,
                bio,
                aboutMeHeader,
                aboutMeDescription,
                schools,
                collages,
                overview,
                overviewHeader,
                learningJourney,
                learningJourneyHeader,
                linkedinUrl,
                githubUrl,
                whatsappUrl,
                instagramUrl,
                facebookUrl,
                primaryGmail,
                secondaryGmail,
                mobileNumber,
                anonymousMessageUrl,
            }
        });

        return NextResponse.json(aboutMe);
    } catch (error) {
        console.log('[ABOUTME_PATCH]', error);
        return new NextResponse("Internal error", { status: 500 });
    }
}
