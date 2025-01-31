
import React, { useState } from 'react'
import { toast } from 'react-toastify'
import Swal from 'sweetalert2'
import { useSWRConfig } from 'swr'
import { useRolFuncionalService } from '../../Hooks/useRolFuncionalService'
import ButtonDelete from '@/shared/Components/Buttons/ButtonDelete'
import { useUtils } from '@/shared/Hooks/useUtils'

const EliminarRolFuncionalButton = ({ row }) => {
    const { mutate } = useSWRConfig();
    const { eliminarRolFuncional } = useRolFuncionalService();
    const [isLoading, setIsLoading] = useState(false)
    const handleEliminar = () => {
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
                        const response = await eliminarRolFuncional(row.id)

                        if (response.success === true) {
                            toast.success(response.messages[0])
                            mutate("rol_funcional")
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
            console.log(error)
            setIsLoading(false)
        }
    }
    const { ValidarPermisos } = useUtils()
    if (!ValidarPermisos('GESROL', 'ELI')) return null
    return (
        <>
            <ButtonDelete action={handleEliminar} isLoading={isLoading} />


        </>
    )
}

export default EliminarRolFuncionalButton