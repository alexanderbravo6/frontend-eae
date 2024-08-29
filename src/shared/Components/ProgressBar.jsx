import { Progress } from '@nextui-org/react'
import React from 'react'


function ProgressBar() {
    return (
        <Progress
            size="sm"
            isIndeterminate
            aria-label="Loading..."
            className="max-w-md"
        />
    )
}

export default ProgressBar