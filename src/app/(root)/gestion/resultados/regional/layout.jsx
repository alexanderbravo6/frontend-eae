
export const metadata = {
    title: "Resultados Regionales",
    description: "Resultados regionales de la evaluación de la EAE.",
};
import { ResultadoRegionalProvider } from '@/modules/Resultados/Regional/Providers/ResultadoRegionalProvider';
import React from 'react'



function ResultadoRegionalLayout({ children }) {

    return (

        <ResultadoRegionalProvider>
            {children}
        </ResultadoRegionalProvider>
    )
}

export default ResultadoRegionalLayout