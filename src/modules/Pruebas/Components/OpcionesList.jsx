import React from 'react'
import OpcionesItem from './OpcionesItem'
import { Skeleton } from '@nextui-org/react'
import TemplateErrorData from '@/shared/Components/Templates/TemplateErrorData'
import RegistrarOpcionModal from './Modals/Opciones/RegistrarOpcionModal'
import { useOpcionService } from '../Hooks/useOpcionService'


function OpcionesList({ idPregunta }) {
    const { FetchOpciones } = useOpcionService()
    const opciones = FetchOpciones(idPregunta)
    if (opciones.error) return <TemplateErrorData />
    if (opciones.isLoading) return <Skeleton className="h-3 w-3/5 rounded-lg" />

    return (
        <>
            <section>
                <div className='mb-1' >
                    <RegistrarOpcionModal idPregunta={idPregunta} />
                </div>
                {opciones &&
                    opciones?.data?.data.map((opcion, index) => (
                        <OpcionesItem key={index} data={opcion} />
                    ))
                }
            </section>
        </>
    )
}

export default OpcionesList