

import { useSWRConfig } from "swr";
import { toast } from "react-toastify";
import { useState } from "react";
import { usePersonaService } from "../../Hooks/usePersonaService";
import Swal from "sweetalert2";
import { usePersona } from "../../Providers/PersonaProvider";
import ButtonDelete from "@/shared/Components/Buttons/ButtonDelete";
import { useUtils } from "@/shared/Hooks/useUtils";


const EliminarPersonaButton = ({ row }) => {
    const { query, pagination } = usePersona();
    const { mutate } = useSWRConfig();
    const { eliminarPersona } = usePersonaService();
    const [isLoading, setIsLoading] = useState(false)
    const { ValidarPermisos } = useUtils()
    const handleEliminar = async () => {
        setIsLoading(true)
        try {

            Swal.fire({
                title: "¿Está seguro?",
                text: "No podrá revertir esta acción!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Si, Eliminar!",
            }).then(async (result) => {
                if (result.isConfirmed) {
                    try {
                        const response = await eliminarPersona(row.id)

                        if (response.success === true) {
                            toast.success(response.messages[0])
                            mutate(`personas_${pagination?.pageIndex + 1}_${JSON.stringify(query)}`)
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

        }
    }

    if (!ValidarPermisos('GESPER', 'ELI')) return null
    return (
        <>
            <ButtonDelete action={handleEliminar} isLoading={isLoading} />
        </>
    )
}

export default EliminarPersonaButton