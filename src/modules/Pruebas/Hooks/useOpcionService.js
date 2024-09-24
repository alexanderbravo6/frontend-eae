
import useSWR from "swr";
import useClienteAxios from "@/shared/Hooks/useClienteAxios";
import { configSWR } from "@/shared/Constants/GlobalConstants";


export const useOpcionService = () => {
    const axios = useClienteAxios();

    const eliminarOpcion = async (id) => {
        try {
            const response = await axios.delete("/v1/opciones/" + id);
            return response.data;
        } catch (error) {
            return error.response.data;
        }
    };

    const actualizarOpcion = async (id, data) => {
        try {
            const response = await axios.put('/v1/opciones/' + id, data);
            return response.data;
        } catch (error) {
            return error.response.data;
        }
    };
    const registrarOpcion = async (data) => {
        try {
            const response = await axios.post('/v1/opciones', data);
            return response.data;
        } catch (error) {
            return error.response.data;
        }
    };

    const FetchOpciones = (id) => {

        const fetcher = () => axios.get(`/v1/preguntas/${id}/opciones`).then(response => response.data);
        const { data, error, isLoading, mutate } = useSWR(`preguntas_opciones_${id}`, fetcher, configSWR);
        return { data, error, isLoading, mutate }
    }

    return { actualizarOpcion, eliminarOpcion, registrarOpcion, FetchOpciones };


}