'use client'
import React from 'react'
import RegistrarPreguntaModal from './Modals/Pregunta/RegistrarPreguntaModal'
import RegistrarPreguntaGrupalModal from './Modals/Pregunta/RegistrarPreguntaGrupalModal'
import PreguntasAccordion from './PreguntasAccordion'
import { useUtils } from '@/shared/Hooks/useUtils'
import TemplateDeniedPermission from '@/shared/Components/Templates/TemplateDeniedPermission'

function PreguntaIndex({ idPrueba }) {
    const { ValidarPermisos } = useUtils()
    if (!ValidarPermisos('GESPRU', 'ACC')) return <TemplateDeniedPermission />
    return (
        <>
            <section className='w-full flex gap-5 my-5  justify-between flex-wrap' >
                <section className='flex gap-3'>
                    <RegistrarPreguntaModal idPrueba={idPrueba} />
                    <RegistrarPreguntaGrupalModal idPrueba={idPrueba} />
                </section>
                <section>
                    <button
                        className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        onClick={() => window.history.back()}
                    >

                        Volver atrás
                    </button>
                </section>
            </section>
            <section className='my-5' >
                <PreguntasAccordion idPrueba={idPrueba} />
            </section>
        </>
    )
}

export default PreguntaIndex