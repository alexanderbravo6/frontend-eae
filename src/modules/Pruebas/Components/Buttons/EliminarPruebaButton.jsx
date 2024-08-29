import { IconDelete } from '@/shared/Components/Icons'
import React from 'react'

function EliminarPruebaButton({ row }) {

    const handleEliminar = () => {

        console.log('Eliminar')
    }
    return (
        <>
            <button className='text-red-600 w-6 h-6' onClick={handleEliminar} >
                <IconDelete />
            </button>
        </>
    )
}

export default EliminarPruebaButton