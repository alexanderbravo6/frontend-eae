import { IconDelete } from '@/shared/Components/Icons'
import React, { useState } from 'react'
import { useEnunciadoService } from '../../Hooks/useEnunciadoService';
import { useSWRConfig } from 'swr';
import { Button } from '@nextui-org/react';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import { useUtils } from '@/shared/Hooks/useUtils';

function EliminarEnunciadoButton({ id }) {
    const { mutate } = useSWRConfig();
    const [isLoading, setIsLoading] = useState(false)
    const { eliminarEnunciado } = useEnunciadoService()
    const { ValidarPermisos } = useUtils()
    if (!ValidarPermisos('GESENU', 'ELI')) return null


    const handleEliminar = () => {

        setIsLoading(true)
        try {

            Swal.fire({
                title: "¿Está seguro?",
                text: "No podrá revertir esta acción",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Si, Eliminar!",
            }).then(async (result) => {
                if (result.isConfirmed) {
                    try {
                        const response = await eliminarEnunciado(id)
                        if (response.success === true) {
                            toast.success(response.messages[0])
                            mutate(`enunciados`,
                                // Aquí se actualiza la data
                                //eliminar por id
                                (res) => res
                                    ? {
                                        ...res,
                                        data: res.data.filter(item => item.id !== id)
                                    } : res
                                ,
                                false
                            )
                            setIsLoading(false)
                        } else {
                            setIsLoading(false)
                            toast.error(response.messages[0])
                        }
                    }
                    catch (error) {
                        console.log(error)
                        setIsLoading(false)
                        toast.error("Error al eliminar")
                    }
                } else {
                    setIsLoading(false)
                }
            });

        } catch (error) {
            setIsLoading(false)
            console.log(error)
        }
    }
    return (
        <>
            {
                isLoading ? (
                    <>
                        <Button isIconOnly isLoading size="sm" title='Eliminar' className='border-none' variant="ghost" color="danger">
                            <IconDelete />
                        </Button>
                    </>
                ) : (
                    <>
                        <Button isIconOnly size="sm" title='Eliminar' className='border-none' variant="ghost" color="danger" onPress={handleEliminar}>
                            <IconDelete />
                        </Button>

                    </>
                )
            }
        </>
    )
}

export default EliminarEnunciadoButton