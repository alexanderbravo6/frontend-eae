import { IconTest } from '@/shared/Components/Icons'
import Link from 'next/link'
import React from 'react'
import RegistrarPreguntaModal from './Modals/Pregunta/RegistrarPreguntaModal'
import RegistrarPreguntaGrupalModal from './Modals/Pregunta/RegistrarPreguntaGrupalModal'
import PreguntasAccordion from './PreguntasAccordion'

function PreguntaIndex() {
    return (
        <>
            <section className='w-full flex gap-5 my-5 flex-wrap' >
                <RegistrarPreguntaModal />
                <RegistrarPreguntaGrupalModal />
            </section>
            <section>
                <PreguntasAccordion />
            </section>
        </>
    )
}

export default PreguntaIndex