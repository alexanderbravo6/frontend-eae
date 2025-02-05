
import useSWR from "swr";
import { configSWR } from "@/shared/Constants/GlobalConstants";
import useClienteAxios from "@/shared/Hooks/useClienteAxios";

export const useSeguimientoService = (token = null) => {

    const axios = useClienteAxios(token);
    //consulta SWR
    const eliminarEvaluacion = async (idEvaluacion) => {
        try {
            const response = await axios.delete("/v1/evaluaciones/" + idMatricula);
            return response.data;
        } catch (error) {
            return error.response.data;
        }
    };

    const actualizarEvaluacion = async (idEvaluacion, data) => {
        try {
            const response = await axios.put('/v1/evaluaciones/' + idEvaluacion, data);
            return response.data;
        } catch (error) {
            return error.response.data;
        }
    };
    const FetchEvaluaciones = (page, query) => {

        const fetcher = () => axios.get("/v1/evaluaciones", { params: { page, ...query } }).then(response => response.data);
        const { data, error, isLoading, mutate } = useSWR(`evaluaciones_${page}_${JSON.stringify(query)}`, fetcher, configSWR);
        return { data, error, isLoading, mutate }
    }
    const FetchRespuestas = (id) => {

        const fetcher = () => axios.get(`/v1/evaluaciones/${id}/respuestas`).then(response => response.data);
        const { data, error, isLoading, mutate } = useSWR(`evaluaciones_${id}_respuestas`, fetcher, configSWR);
        return { data, error, isLoading, mutate }
    }

    return {
        FetchEvaluaciones,
        actualizarEvaluacion,
        eliminarEvaluacion,
        FetchRespuestas
    }
}