
import useSWR from "swr";
import { configSWR } from "@/shared/Constants/GlobalConstants";
import useClienteAxios from "@/shared/Hooks/useClienteAxios";


export const useResultadoRegionalService = () => {
    const axios = useClienteAxios();
    //consulta SWR


    const FetchNivelDesempenioRegional = (anio, idCiclo, idRegion) => {
        const fetcher = () => axios.get("/v1/resultados/regional/nivel-desempenio", { params: { anio, idCiclo, idRegion } }
        ).then(data => data.data);
        const { data, error, isLoading, mutate } = useSWR(`nivel_desempenio_regional_${anio}_${idCiclo}_${idRegion}`, fetcher, configSWR);
        return { data, error, isLoading, mutate }
    };


    return {
        FetchNivelDesempenioRegional
    }
}