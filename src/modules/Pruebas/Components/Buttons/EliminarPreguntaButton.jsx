import { IconDelete } from '@/shared/Components/Icons'
import { Button } from '@nextui-org/react'
import React from 'react'

function EliminarPreguntaButton({ data }) {

    const handleEliminar = () => {
        console.log('Eliminar')
    }
    return (
        <>

            <Button onPress={handleEliminar} size='sm' color="danger">
                <span className='w-5 h-5' >
                    <IconDelete />
                </span>
                Eliminar
            </Button>
        </>
    )
}

export default EliminarPreguntaButton