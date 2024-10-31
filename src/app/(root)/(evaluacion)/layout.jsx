import { EvaluacionProvider } from '@/modules/Evaluacion/Context/useEvaluacion'
import React from 'react'

function EvaluacionLayout({ children }) {
    return (
        <EvaluacionProvider>
            {children}
        </EvaluacionProvider>
    )
}

export default EvaluacionLayout