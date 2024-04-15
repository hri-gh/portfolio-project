import React from 'react'

import { LearningJourneyForm } from '../[learningJourneyId]/components/learning-journey-form'

const AddNewOverview = () => {
    return (
        <div className="flex-col">
            <div className="flex-1 space-y-4 p-8 pt-6">
                <LearningJourneyForm initialData={null} />
            </div>
        </div>
    )
}

export default AddNewOverview
