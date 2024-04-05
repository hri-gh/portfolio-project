import prismadb from "@/lib/prismadb";

import { GridContentForm } from './components/content-form'

const GridContentPage = async ({
    params
}: {
    params: { contentId: string }
}
) => {
    if (params.contentId === "new") {
        params.contentId = ""
    }

    const gridContent = await prismadb.gridContent.findUnique({
        where: {
            id: params.contentId
        }
    })

    console.log('ID::', params.contentId);


    return (
        <div className="flex-col">
            <div className="flex-1 space-y-4 p-8 pt-6">
                <GridContentForm initialData={gridContent} />
            </div>
        </div>
    )
}

export default GridContentPage
