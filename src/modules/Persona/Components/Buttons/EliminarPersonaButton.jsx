import useClienteAxios from "@/shared/Hooks/useClienteAxios";
import { usePersona } from "../../Providers/PersonaProvider";
import { useSWRConfig } from "swr";
import { useSession } from "next-auth/react";
import { toast } from "react-toastify";
import { Button } from "@nextui-org/react";
import { IconDelete } from "@/shared/Components/Icons";
import { useState } from "react";
import { usePersonaService } from "../../Hooks/usePersonaService";
import Swal from "sweetalert2";


const EliminarPersonaButton = ({ row }) => {
    const { query, pagination } = usePersona();
    const { mutate } = useSWRConfig();
    const { eliminarPersona } = usePersonaService();
    const [isLoading, setIsLoading] = useState(false)



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
                        <Button isIconOnly size="sm" title='Eliminar' className='border-none' variant="solid" color="danger" onPress={handleEliminar}>
                            <IconDelete />
                        </Button>

                    </>
                )
            }


        </>
    )
}

export default EliminarPersonaButton