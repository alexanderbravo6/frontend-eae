
import useSWR from "swr";
import { configSWR } from "@/shared/Constants/GlobalConstants";
import useClienteAxios from "@/shared/Hooks/useClienteAxios";



export const useResultadoInstitucionalService = () => {
    const axios = useClienteAxios();
    //consulta SWR

    const FetchNivelDesempenioInstitucional = (anio, idCiclo, idInstitucion) => {
        const fetcher = () => axios.get("/v1/resultados/institucional/nivel-desempenio", { params: { anio, idCiclo, idInstitucion } }
        ).then(data => data.data);
        const { data, error, isLoading, mutate } = useSWR(`nivel_desempenio_institucional_${anio}_${idCiclo}_${idInstitucion}`, fetcher, configSWR);
        return { data, error, isLoading, mutate }
    };




    return {
        FetchNivelDesempenioInstitucional,
    }
}