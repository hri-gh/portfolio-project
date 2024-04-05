import React from 'react'

import { GridContentForm } from '../[contentId]/components/content-form'

const AddNewGridContent = () => {
    return (
        <div className="flex-col">
            <div className="flex-1 space-y-4 p-8 pt-6">
                <GridContentForm initialData={null} />
            </div>
        </div>
    )
}

export default AddNewGridContent
