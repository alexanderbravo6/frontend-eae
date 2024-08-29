
import useSWR from "swr";
import { configSWR } from "@/shared/Constants/GlobalConstants";
import useAxiosEvaluacion from "@/shared/Hooks/useAxiosEvaluacion";

export const useEvaluacionService = () => {
    const axios = useAxiosEvaluacion();
    //consulta SWR

    const FetchPruebasActivas = () => {
        const fetcher = () => axios.get("/v1/pruebas/activas").then(data => data.data);
        const { data, error, isLoading, mutate } = useSWR("pruebas", fetcher, configSWR);
        return { data, error, isLoading, mutate }
    };
    const FetchPreguntasByToken = (token) => {
        const fetcher = () => axios.get(`/v1/evaluacion/${token}/preguntas`).then(data => data.data);
        const { data, error, isLoading, mutate, isValidating } = useSWR("evaluacion_preguntas_" + token, fetcher, configSWR);
        return { data, error, isLoading, mutate, isValidating }
    };
    const cerrarEvaluacion = async (token, data) => {
        try {
            const response = await axios.post(`/v1/evaluacion/${token}/cerrar`, data);
            return response.data;
        } catch (error) {
            return error.response.data;
        }
    };
    const guardarRespuesta = async (token, data) => {
        try {
            const response = await axios.post(`/v1/evaluacion/${token}/preguntas/responder`, data);
            return response.data;
        } catch (error) {
            return error.response.data;
        }
    };
    const validarMatricula = async (data) => {
        try {
            const response = await axios.post('/v1/matricula/validar', data);
            return response.data;
        } catch (error) {
            return error.response.data;
        }
    };
    const validarPreguntasSeguridad = async (data) => {
        try {
            const response = await axios.post('/v1/estudiante/validar', data);
            return response.data;
        } catch (error) {
            return error.response.data;
        }
    };
    const iniciarEvaluacion = async (data) => {
        try {
            const response = await axios.post('/v1/evaluacion/iniciar', data);
            return response.data;
        } catch (error) {
            return error.response.data;
        }
    };

    return { FetchPruebasActivas, cerrarEvaluacion, guardarRespuesta, FetchPreguntasByToken, iniciarEvaluacion, validarPreguntasSeguridad, validarMatricula }
}