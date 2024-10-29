
export const metadata = {
    title: "Resultados Institucionales",
    description: "Resultados institucionales de la evaluación de la EAE.",

};

import { ResultadoInstitucionalProvider } from '@/modules/Resultados/Institucional/Providers/ResultadoInstitucionalProvider';
import React from 'react'



function ResultadoInstitucionalLayout({ children }) {

    return (

        <ResultadoInstitucionalProvider>
            {children}
        </ResultadoInstitucionalProvider>
    )
}

export default ResultadoInstitucionalLayout