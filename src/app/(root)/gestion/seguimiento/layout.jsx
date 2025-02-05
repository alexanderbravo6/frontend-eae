
export const metadata = {
    title: "Seguimiento",
    description: "Módulo de seguimiento de evaluaciones",

};

import { SeguimientoEvaluacionProvider } from '@/modules/Evaluacion/Context/SeguimientoEvaluacionProvider';
import React from 'react'



function SeguimientoEvaluacionLayout({ children }) {

    return (

        <SeguimientoEvaluacionProvider>
            {children}
        </SeguimientoEvaluacionProvider>
    )
}

export default SeguimientoEvaluacionLayout