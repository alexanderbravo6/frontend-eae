
export const metadata = {
    title: "Resultados Nacionales",
    description: "Resultados nacionales de la evaluación de la EAE.",

};

import { ResultadoNacionalProvider } from '@/modules/Resultados/Nacional/Providers/BaseProvider';
import React from 'react'



function ResultadoNacionalLayout({ children }) {

    return (

        <ResultadoNacionalProvider>
            {children}
        </ResultadoNacionalProvider>
    )
}

export default ResultadoNacionalLayout