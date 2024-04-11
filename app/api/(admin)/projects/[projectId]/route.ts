import { getDataFromToken } from "@/helpers/get-data-from-token";
import prismadb from "@/lib/prismadb";
import { NextRequest, NextResponse } from "next/server"


export async function GET(
    request: NextRequest,
    { params }: { params: { projectId: string } }
) {
    try {
        if (!params.projectId) {
            return new NextResponse("Project id is required", { status: 400 });
        }

        const project = await prismadb.project.findUnique({
            where: {
                id: params.projectId
            },
            include: {
                images: true
            }
        });

        return NextResponse.json(project);
    } catch (error) {
        console.log('[PROJECT_GET]', error);
        return new NextResponse("Internal error", { status: 500 });
    }
};


export async function DELETE(
    request: NextRequest,
    { params }: { params: { projectId: string } }
) {
    try {
        const userId = await getDataFromToken(request)
        const user = await prismadb.user.findFirst({ where: { id: userId } })

        if (!user) {
            return new NextResponse("Unauthorized", { status: 405 })
        }

        if (!params.projectId) {
            return new NextResponse("Project id is required", { status: 400 });
        }

        const project = await prismadb.project.delete({
            where: {
                id: params.projectId,
            }
        });

        return NextResponse.json(project);
    } catch (error) {
        console.log('[PROJECT_DELETE]', error);
        return new NextResponse("Internal error", { status: 500 });
    }
}


export async function PATCH(
    request: NextRequest,
    { params }: { params: { projectId: string } }
) {
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

        if (!params.projectId) {
            return new NextResponse("Project id is required", { status: 400 });
        }

        await prismadb.project.update({
            where: {
                id: params.projectId,
            },
            data: {
                images: {
                    deleteMany: {},
                },
                projectName,
                technologies,
                aboutProject,
                liveDemoLink,
                websiteLink,
                githubLink,
                gitlabLink,
                bitbucketLink,
                projectType,
            }
        });

        const project = await prismadb.project.update({
            where: {
                id: params.projectId,
            },
            data: {
                images: {
                    createMany: {
                        data: [
                            ...images.map((image: { url: string }) => image)
                        ]
                    }
                }
            }
        })

        return NextResponse.json(project);
    } catch (error) {
        console.log('[PROJECT_PATCH]', error);
        return new NextResponse("Internal error", { status: 500 });
    }
}
