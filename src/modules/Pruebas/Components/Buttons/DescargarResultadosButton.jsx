import React, { useState } from "react";
import axios from "axios";
import useClienteAxios from "@/shared/Hooks/useClienteAxios";
import IconFileDownload from "@/shared/Components/Icons/IconFileDownload";
import { Button } from "@nextui-org/react";

const DescargarResultadosButton = ({ id }) => {
    const [loading, setLoading] = useState(false);
    const axios = useClienteAxios();
    const handleExport = async () => {
        setLoading(true);
        try {
            const response = await axios.get("/v1/pruebas/resultados?idPrueba=" + id, { responseType: "blob" });

            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement("a");
            link.href = url;
            link.setAttribute("download", "archivo.xlsx");
            document.body.appendChild(link);
            link.click();
            link.remove();
        } catch (error) {
            console.error("Error al descargar el archivo", error);
        } finally {
            setLoading(false);
        }

    };

    return (
        <>
            {
                loading ? (
                    <>
                        <Button isIconOnly isLoading size="sm" title='Descargar Resultados' className='border-none' variant="solid" color="primary">

                        </Button>
                    </>
                ) : (
                    <>
                        <Button isIconOnly size="sm" title='Descargar Resultados' className='border-none' variant="solid" color="primary" onPress={handleExport}>
                            <IconFileDownload />
                        </Button>

                    </>
                )
            }
        </>

    );
};

export default DescargarResultadosButton;
