export const metadata = {
    title: "Gestión de Matrículas",
    description: "Módulo de gestión de matrículas",

};

import { MatriculaProvider } from '@/modules/Matriculas/Providers/MatriculaProvider';
import React from 'react'



function MatriculaLayout({ children }) {
    return (

        <MatriculaProvider>
            {children}
        </MatriculaProvider>
    )
}

export default MatriculaLayout