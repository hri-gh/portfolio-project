import { NextRequest, NextResponse } from "next/server"
import prismadb from "@/lib/prismadb";

import { getDataFromToken } from "@/helpers/get-data-from-token";

export async function POST(request: NextRequest) {
    const reqBody = await request.json()
    const {
        images,
        projectName,
        technologies,
        aboutProject,
        liveDemoLink,
        websiteLink,
        githubLink,
        gitlabLink,
        bitbucketLink,
        projectType,
    } = reqBody

    try {
        const userId = await getDataFromToken(request)
        const user = await prismadb.user.findFirst({ where: { id: userId } })

        if (!user) {
            return new NextResponse("Unauthorized", { status: 405 })
        }

        const project = await prismadb.project.create({
            data: {
                projectName,
                aboutProject,
                liveDemoLink,
                websiteLink,
                githubLink,
                gitlabLink,
                bitbucketLink,
                projectType,
                technologies,
                images: {
                    createMany: {
                        data: [
                            ...images.map((image: { url: string }) => image)
                        ]
                    }
                }
            }
        })

        return NextResponse.json(project)
    } catch (error) {
        console.log('[PROJECTS_POST]', error);
        return new NextResponse("Internal error", { status: 500 })
    }

}



export async function GET(
    request: NextRequest,
) {
    try {
        const projects = await prismadb.project.findMany({
            include: {
                images: true
            }
        });
        return NextResponse.json(projects);
    } catch (error) {
        console.log('[PROJECTS_GET]', error);
        return new NextResponse("Internal error", { status: 500 });
    }
};
