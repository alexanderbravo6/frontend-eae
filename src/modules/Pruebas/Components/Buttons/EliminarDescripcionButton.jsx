
import React, { useState } from 'react'
import { useSWRConfig } from 'swr';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import { useUtils } from '@/shared/Hooks/useUtils';
import { usePruebaService } from '../../Hooks/usePruebaService';
import { useSession } from 'next-auth/react';
import ButtonDelete from '@/shared/Components/Buttons/ButtonDelete';

function EliminarDescripcionButton({ row }) {
    const { mutate } = useSWRConfig();
    const { data: session } = useSession()
    const [isLoading, setIsLoading] = useState(false)
    const { eliminarDescripcionNivelDesempenio } = usePruebaService()
    const { ValidarPermisos } = useUtils()
    if (!ValidarPermisos('GESPRU', 'ELI')) return null


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
                        const response = await eliminarDescripcionNivelDesempenio(row.id)
                        if (response.success === true) {
                            toast.success(response.messages[0])
                            mutate(`listado_descripcion_nivel_desempenio_${row.idPrueba}`)
                            setIsLoading(false)
                        } else {
                            setIsLoading(false)
                            toast.error(response.errors[0])
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
            <ButtonDelete action={handleEliminar} isLoading={isLoading} />
        </>
    )
}

export default EliminarDescripcionButton