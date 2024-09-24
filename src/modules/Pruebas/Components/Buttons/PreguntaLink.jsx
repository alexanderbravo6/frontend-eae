import { IconTest } from '@/shared/Components/Icons'
import Link from 'next/link'
import React from 'react'

function PreguntaLink({ id }) {
    return (
        <>
            <Link href={`/gestion/prueba/configurar-preguntas/${id}`} title='Configurar Preguntas' className='text-sky-800'>
                <IconTest />
            </Link>
        </>
    )
}

export default PreguntaLink