import React from 'react'
import OpcionesItem from './OpcionesItem'
import { Skeleton } from '@nextui-org/react'
import LoadingErrorCard from '@/shared/Components/LoadingErrorCard'
import RegistrarOpcionModal from './Modals/Opciones/RegistrarOpcionModal'

const opciones = {
    error: false,
    isLoading: false,
    data: [
        {
            id: 1,
            contenido: `<p className="ql-align-justify">Implementar políticas y prácticas inclusivas en el lugar de trabajo.</p>`,
            letra: "A",
            correcta: false

        },
        {
            id: 2,
            letra: "B",
            contenido: "Opción 02",
            correcta: false
        },
        {
            id: 3,
            letra: "C",
            contenido: "Opción 03",
            correcta: true
        },
        {
            id: 4,
            letra: "D",
            contenido: "Opción 04",
            correcta: false
        }
    ]
}
function OpcionesList({ id }) {
    if (opciones.error) return <LoadingErrorCard />
    if (opciones.isLoading) return <Skeleton className="h-3 w-3/5 rounded-lg" />

    return (
        <>
            <section>
                <div className='mb-1' >
                    <RegistrarOpcionModal id={id} />
                </div>
                {opciones &&
                    opciones.data.map((opcion, index) => (
                        <OpcionesItem key={index} data={opcion} />
                    ))
                }
            </section>
        </>
    )
}

export default OpcionesList