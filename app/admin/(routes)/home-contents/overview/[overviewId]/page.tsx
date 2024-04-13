import prismadb from "@/lib/prismadb";

import { OverviewForm } from './components/overview-form'

const OverviewPage = async ({
    params
}: {
    params: { overviewId: string }
}
) => {

    const overview = await prismadb.overview.findUnique({
        where: {
            id: params.overviewId
        }
    })

    return (
        <div className="flex-col">
            <div className="flex-1 space-y-4 p-8 pt-6">
                <OverviewForm initialData={overview} />
            </div>
        </div>
    )
}

export default OverviewPage
