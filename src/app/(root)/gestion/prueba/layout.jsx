
export const metadata = {
    title: "Gestión de Matrículas",
    description: "Módulo de gestión de matrículas",

};

import { PruebaProvider } from '@/modules/Pruebas/Providers/PruebaProvider';
import React from 'react'



function PruebaLayout({ children }) {

    return (
        <>
            <PruebaProvider >
                {children}
            </PruebaProvider>

        </>
    )
}

export default PruebaLayout