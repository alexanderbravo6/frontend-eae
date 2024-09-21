export const metadata = {
    title: "Gestión de Personas",
    description: "Módulo de gestión de personas",

};
import { PersonaProvider } from '@/modules/Persona/Providers/PersonaProvider'
import React from 'react'

function PersonaLayout({ children }) {
    return (
        <PersonaProvider>
            {children}
        </PersonaProvider>

    )
}

export default PersonaLayout