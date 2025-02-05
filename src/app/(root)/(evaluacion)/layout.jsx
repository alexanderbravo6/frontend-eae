import { EvaluacionProvider } from '@/modules/Evaluacion/Context/EvaluacionProvider'
import React from 'react'

function EvaluacionLayout({ children }) {
    return (
        <EvaluacionProvider>
            {children}
        </EvaluacionProvider>
    )
}

export default EvaluacionLayout