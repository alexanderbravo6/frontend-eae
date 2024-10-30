
import { IconDelete } from '@/shared/Components/Icons'
import React, { useState } from 'react'
import { useSWRConfig } from 'swr';
import { Button } from '@nextui-org/react';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import { useUtils } from '@/shared/Hooks/useUtils';
import { usePreguntaService } from '../../Hooks/usePreguntaService';

function EliminarPreguntaButton({ data }) {
    const { mutate } = useSWRConfig();
    const [isLoading, setIsLoading] = useState(false)
    const { eliminarPregunta } = usePreguntaService()
    const { ValidarPermisos } = useUtils()


    if (!ValidarPermisos('GESPRU', 'AGR')) return null
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
                        const response = await eliminarPregunta(data.id)
                        if (response.success === true) {
                            toast.success(response.messages[0])
                            mutate(`pruebas_preguntas_${data.idPrueba}`,
                                // Aquí se actualiza la data
                                //eliminar por id
                                (res) => res
                                    ? {
                                        ...res,
                                        data: res.data.filter(item => item.id !== data.id)
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

                        <Button isLoading size='sm' color="danger">
                       
                        </Button>
                    </>
                ) : (
                    <>

                        <Button onPress={handleEliminar} size='sm' color="danger">

                            <IconDelete />

                            Eliminar
                        </Button>

                    </>
                )
            }
        </>
    )
}

export default EliminarPreguntaButton