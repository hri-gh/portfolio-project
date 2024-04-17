import { getDataFromToken } from "@/helpers/get-data-from-token";
import prismadb from "@/lib/prismadb";
import { NextRequest, NextResponse } from "next/server"

export async function GET(
    request: Request,
    { params }: { params: { skillId: string } }
) {
    try {
        if (!params.skillId) {
            return new NextResponse("Skill id is required", { status: 400 });
        }

        const skill = await prismadb.skill.findUnique({
            where: {
                id: params.skillId
            }
        });

        return NextResponse.json(skill);
    } catch (error) {
        console.log('[SKILL_ID_GET]', error);
        return new NextResponse("Internal error", { status: 500 });
    }
};


export async function DELETE(
    request: NextRequest,
    { params }: { params: { skillId: string } }
) {
    try {
        const userId = await getDataFromToken(request)
        const user = await prismadb.user.findFirst({ where: { id: userId } })

        if (!user) {
            return new NextResponse("Unauthorized", { status: 405 })
        }

        if (!params.skillId) {
            return new NextResponse("Skill id is required", { status: 400 });
        }

        const skill = await prismadb.skill.delete({
            where: {
                id: params.skillId,
            }
        });

        return NextResponse.json(skill);
    } catch (error) {
        console.log('[SKILL_DELETE]', error);
        return new NextResponse("Internal error", { status: 500 });
    }
}

export async function PATCH(
    request: NextRequest,
    { params }: { params: { skillId: string } }
) {
    const reqBody = await request.json()
    const { name, imageUrl } = reqBody

    try {
        const userId = await getDataFromToken(request)
        const user = await prismadb.user.findFirst({ where: { id: userId } })

        if (!user) {
            return new NextResponse("Unauthorized", { status: 405 })
        }

        if (!params.skillId) {
            return new NextResponse("Skill id is required", { status: 400 });
        }

        const skill = await prismadb.skill.update({
            where: {
                id: params.skillId,
            },
            data: {
                name,
                imageUrl
            }
        });

        return NextResponse.json(skill);
    } catch (error) {
        console.log('[SKILL_PATCH]', error);
        return new NextResponse("Internal error", { status: 500 });
    }
}
