import { Button } from '@nextui-org/react'
import React from 'react'
import { IconDelete } from '../Icons'

function ButtonDelete({ action, isLoading }) {
    return (
        <>
            {
                isLoading ? (
                    <>
                        <Button isIconOnly isLoading size="sm" title='Eliminar' className='border-none' variant="solid" color="danger">
                            <IconDelete />
                        </Button>
                    </>
                ) : (
                    <>

                        <Button isIconOnly size="sm" title='Eliminar' className='border-none' variant="bordered" color="danger" onPress={action}>
                            <IconDelete />
                        </Button>

                    </>
                )
            }
        </>
    )
}

export default ButtonDelete