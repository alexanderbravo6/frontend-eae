
import useSWR from "swr";
import useClienteAxios from "@/shared/Hooks/useClienteAxios";
import { configSWR } from "@/shared/Constants/GlobalConstants";


export const usePreguntaService = () => {
    const axios = useClienteAxios();

    const eliminarPregunta = async (id) => {
        try {
            const response = await axios.delete("/v1/preguntas/" + id);
            return response.data;
        } catch (error) {
            return error.response.data;
        }
    };

    const actualizarPregunta = async (id, data) => {
        try {
            const response = await axios.put('/v1/preguntas/' + id, data);
            return response.data;
        } catch (error) {
            return error.response.data;
        }
    };
    const registrarPregunta = async (data) => {
        try {
            const response = await axios.post('/v1/preguntas', data);
            return response.data;
        } catch (error) {
            return error.response.data;
        }
    };


    const FetchPreguntasPorPrueba = (id) => {

        const fetcher = () => axios.get(`/v1/pruebas/${id}/preguntas`).then(response => response.data);
        const { data, error, isLoading, mutate } = useSWR(`pruebas_preguntas_${id}`, fetcher, configSWR);
        return { data, error, isLoading, mutate }
    }

    return { actualizarPregunta, eliminarPregunta, registrarPregunta, FetchPreguntasPorPrueba };


}