
import React, { useState } from 'react'
import { useMatriculaService } from '../../Hooks/useMatriculaService';
import { useMatricula } from '../../Providers/MatriculaProvider';
import { useSWRConfig } from 'swr';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';
import { useUtils } from '@/shared/Hooks/useUtils';
import ButtonDelete from '@/shared/Components/Buttons/ButtonDelete';

function EliminarMatriculaButton({ id, existeEvaluacion }) {

    const { mutate } = useSWRConfig();
    const [isLoading, setIsLoading] = useState(false)
    const { eliminarMatricula } = useMatriculaService()
    const { query, pagination } = useMatricula()
    const { ValidarPermisos } = useUtils()
    if (!ValidarPermisos('GESMAT', 'ELI')) return null
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
                        const response = await eliminarMatricula(id)
                        if (response.success === true) {
                            toast.success(response.messages[0])
                            mutate(`matriculas_${pagination?.pageIndex + 1}_${JSON.stringify(query)}`)
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
            {
                !existeEvaluacion && <ButtonDelete action={handleEliminar} isLoading={isLoading} />
            }
        </>
    )
}

export default EliminarMatriculaButton