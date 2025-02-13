
import { useSWRConfig } from "swr";
import { toast } from "react-toastify";
import { Button } from "@nextui-org/react";
import { IconDelete } from "@/shared/Components/Icons";
import { useState } from "react";
import { usePersonaService } from "../../Hooks/usePersonaService";
import Swal from "sweetalert2";
import ButtonDelete from "@/shared/Components/Buttons/ButtonDelete";
import { useUtils } from "@/shared/Hooks/useUtils";


const EliminarRolAsignadoButton = ({ data }) => {
    const { mutate } = useSWRConfig();
    const { eliminarRolAsignado } = usePersonaService();
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
                        const response = await eliminarRolAsignado(data.idPersonaRol)

                        if (response.success === true) {

                            toast.success(response.messages[0])
                            mutate(`roles_asignados_${data.idPersona}`)
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

        }
    }
    if (!ValidarPermisos('GESPER', 'ELI')) return null
    return (
        <>
            <ButtonDelete action={handleEliminar} isLoading={isLoading} />

        </>
    )
}

export default EliminarRolAsignadoButton