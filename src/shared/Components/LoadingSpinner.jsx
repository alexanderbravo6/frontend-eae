import { Spinner } from "@nextui-org/react";
import React from 'react'

function LoadingSpinner() {
    return (
        <div className="flex justify-center gap-4">

            <Spinner color="primary" size="md" />

        </div>
    )
}

export default LoadingSpinner