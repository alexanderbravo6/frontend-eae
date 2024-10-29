
import useSWR from "swr";
import useClienteAxios from "@/shared/Hooks/useClienteAxios";
import { configSWR } from "@/shared/Constants/GlobalConstants";


export const useResultadoEstudianteService = () => {
    const axios = useClienteAxios();


    const FetchResultadosEstudiantes = (page, query, anio) => {

        const fetcher = () => axios.get("/v1/resultados/estudiantes", { params: { page, ...query, anio } }).then(response => response.data);
        const { data, error, isLoading, mutate } = useSWR(`resultados_estudiantes_${page}_${JSON.stringify(query)}_${anio}`, fetcher, configSWR);
        return { data, error, isLoading, mutate }
    }

    return { FetchResultadosEstudiantes };


}