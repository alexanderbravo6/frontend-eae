
export const metadata = {
    title: "Resultados del Estudiante",
    description: "Resultados del estudiante en la evaluación de la EAE.",

};
import { ResultadoEstudianteProvider } from '@/modules/Resultados/Estudiantes/Providers/ResultadoEstudianteProvider';
import React from 'react'



function ResultadoEstudianteLayout({ children }) {

    return (

        <ResultadoEstudianteProvider>
            {children}
        </ResultadoEstudianteProvider>
    )
}

export default ResultadoEstudianteLayout