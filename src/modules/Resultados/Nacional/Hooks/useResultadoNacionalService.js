
import useSWR from "swr";
import { configSWR } from "@/shared/Constants/GlobalConstants";
import useClienteAxios from "@/shared/Hooks/useClienteAxios";


export const useResultadoNacionalService = () => {
    const axios = useClienteAxios();
    //consulta SWR

    const FetchNivelDesempenioNacional = (anio, idCiclo) => {
        const fetcher = () => axios.get("/v1/resultados/nacional/nivel-desempenio", { params: { anio, idCiclo } }
        ).then(data => data.data);
        const { data, error, isLoading, mutate } = useSWR(`nivel_desempenio_nacional_${anio}_${idCiclo}`, fetcher, configSWR);
        return { data, error, isLoading, mutate }
    };

    const FetchNivelDesempenioPorPrueba = (idPrueba) => {
        const fetcher = () => axios.get("/v1/resultados/nacional/nivel-desempenio", { params: { idPrueba } }
        ).then(data => data.data);
        const { data, error, isLoading, mutate } = useSWR(`nivel_desempenio_nacional_prueba_${idPrueba}`, fetcher, configSWR);
        return { data, error, isLoading, mutate }
    };

    return {
        FetchNivelDesempenioNacional, FetchNivelDesempenioPorPrueba
    }
}