
import useSWR from "swr";
import { configSWR } from "@/shared/Constants/GlobalConstants";
import useClienteAxios from "@/shared/Hooks/useClienteAxios";


export const useResultadoRegionalService = () => {
    const axios = useClienteAxios();
    //consulta SWR

    const FetchPromedioRegional = (idPrueba, idRegion) => {
        const fetcher = () => axios.get("/v1/resultados/regional/promedio", { params: { idPrueba,idRegion } }
        ).then(data => data.data);
        const { data, error, isLoading, mutate } = useSWR(`promedio_regional_${idRegion}_${idPrueba}`,
            idPrueba ? fetcher : null, configSWR);
        return { data, error, isLoading, mutate }
    };
    const FetchNivelDesempenioRegional = (anio, idCiclo, idRegion) => {
        const fetcher = () => axios.get("/v1/resultados/regional/nivel-desempenio", { params: { anio, idCiclo, idRegion } }
        ).then(data => data.data);
        const { data, error, isLoading, mutate } = useSWR(`nivel_desempenio_regional_${anio}_${idCiclo}_${idRegion}`, fetcher, configSWR);
        return { data, error, isLoading, mutate }
    };
    const FetchParticipantePorPruebaRegional = (anio, idCiclo, idRegion) => {
        const fetcher = () => axios.get("/v1/resultados/regional/prueba/participantes", { params: { anio, idCiclo, idRegion } }
        ).then(data => data.data);
        const { data, error, isLoading, mutate } = useSWR(`participantes_prueba_regional_${anio}_${idCiclo}_${idRegion}`, fetcher, configSWR);
        return { data, error, isLoading, mutate }
    };
    const FetchParticipantesPorProgramaRegional = (idCiclo, anio, idRegion) => {
        const fetcher = () => axios.get("/v1/resultados/regional/programa/participantes", { params: { idCiclo, anio, idRegion } }
        ).then(data => data.data);
        const { data, error, isLoading, mutate } = useSWR(`cantidad_evaluados_regional_${idCiclo}_${anio}_${idRegion}`, fetcher, configSWR);
        return { data, error, isLoading, mutate }
    };


    return {
        FetchNivelDesempenioRegional,
        FetchParticipantePorPruebaRegional,
        FetchParticipantesPorProgramaRegional,
        FetchPromedioRegional
    }
}