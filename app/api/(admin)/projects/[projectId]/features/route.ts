import { NextRequest, NextResponse } from "next/server"
import prismadb from "@/lib/prismadb";
import { getDataFromToken } from "@/helpers/get-data-from-token";

export async function POST(request: NextRequest, { params }: { params: { projectId: string } }) {
    const reqBody = await request.json()
    const { projectId } = params
    const { featureTitle, featureDescription, featureImage, featureVideo } = reqBody

    const userId = await getDataFromToken(request)
    const user = await prismadb.user.findFirst({ where: { id: userId } })

    try {
        if (!user) {
            return new NextResponse("Unauthorized", { status: 405 })
        }

        const feature = await prismadb.projectFeature.create({
            data: {
                projectId: projectId,
                featureTitle,
                featureDescription,
                featureImage,
                featureVideo
            },

        })

        return NextResponse.json(feature)
    } catch (error) {
        console.log('[PROJECT_FEATURES_POST]', error);
        return new NextResponse("Internal error", { status: 500 })
    }
}


export async function GET(
    request: NextRequest,
    { params }: { params: { projectId: string } }
) {
    const { projectId } = params
    try {
        const features = await prismadb.projectFeature.findMany(
            {
                where: {
                    projectId: projectId
                }
            }
        );
        return NextResponse.json(features);
    } catch (error) {
        console.log('[PROJECT_FEATURES_GET]', error);
        return new NextResponse("Internal error", { status: 500 });
    }
};
