import { IconDelete } from '@/shared/Components/Icons'
import React from 'react'

function EliminarEnunciadoButton({ row }) {

    const handleEliminar = () => {

        console.log('Eliminar')
    }
    return (
        <>
            <button className='text-red-600' onClick={handleEliminar} >
                <IconDelete />
            </button>
        </>
    )
}

export default EliminarEnunciadoButton