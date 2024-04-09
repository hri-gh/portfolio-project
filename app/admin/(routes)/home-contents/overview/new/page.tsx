import React from 'react'

import { OverviewForm } from '../../../grid-contents/[contentId]/components/overview-form'

const AddNewOverview = () => {
    return (
        <div className="flex-col">
            <div className="flex-1 space-y-4 p-8 pt-6">
                <OverviewForm initialData={null} />
            </div>
        </div>
    )
}

export default AddNewOverview
