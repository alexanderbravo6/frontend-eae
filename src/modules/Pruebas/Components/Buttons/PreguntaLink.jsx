import { IconTest } from '@/shared/Components/Icons'
import Link from 'next/link'
import React from 'react'

function PreguntaLink() {
    return (
        <>
            <Link href={`/administracion/configurar-preguntas`} title='Configurar Preguntas' className='text-sky-800'>
                <IconTest />
            </Link>
        </>
    )
}

export default PreguntaLink