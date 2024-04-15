import prismadb from "@/lib/prismadb";

import { LearningJourneyForm } from './components/learning-journey-form'

const LearningJourneyPage = async ({
    params
}: {
    params: { learningJourneyId: string }
}
) => {

    const learningJourney = await prismadb.learningJourney.findUnique({
        where: {
            id: params.learningJourneyId
        }
    })

    return (
        <div className="flex-col">
            <div className="flex-1 space-y-4 p-8 pt-6">
                <LearningJourneyForm initialData={learningJourney} />
            </div>
        </div>
    )
}

export default LearningJourneyPage
