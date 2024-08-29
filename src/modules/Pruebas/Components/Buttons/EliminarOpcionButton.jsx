import { IconDelete } from '@/shared/Components/Icons'
import React from 'react'

function EliminarOpcionButton({ data }) {

    const handleEliminar = () => {

        console.log('Eliminar')
    }
    return (
        <>
            <button className='text-red-600 w-5 h-5 ' onClick={handleEliminar} >
                <IconDelete />
            </button>
        </>
    )
}

export default EliminarOpcionButton