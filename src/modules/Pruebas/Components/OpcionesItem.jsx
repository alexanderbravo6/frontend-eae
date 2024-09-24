import { IconCheck, IconCheckbox, IconX } from '@/shared/Components/Icons'
import React from 'react'
import ActualizarOpcionModal from './Modals/Opciones/ActualizarOpcionModal'
import EliminarOpcionButton from './Buttons/EliminarOpcionButton'

function OpcionesItem({ data }) {
    return (
        <div className='flex w-full items-center mb-2 gap-6 ' >
            <div className={`${data.esCorrecta === true ? "text-green-500 font-bold " : ""} flex items-center`}  >
                <div className={` w-10 ${data.esCorrecta === true ? "text-green-500" : "text-red-500"}  min-w-10 flex text-sm`}>
                    {
                        data.esCorrecta === true ? <IconCheck /> : <IconX />
                    }
                </div>
                <div className=' flex items-center gap-3'>
                    <p className={`${data.esCorrecta === true ? "text-green-500" : ""}`} >
                        {data.letra}.
                    </p>
                    <div dangerouslySetInnerHTML={{ __html: data.contenido }} />
                </div>
            </div>
            <div className='flex '>
                <ActualizarOpcionModal row={data} />
                <EliminarOpcionButton row={data} />
            </div>
        </div>
    )
}

export default OpcionesItem