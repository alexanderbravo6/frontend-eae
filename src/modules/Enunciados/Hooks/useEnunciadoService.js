
import useSWR from "swr";
import { configSWR } from "@/shared/Constants/GlobalConstants";
import useAxiosEvaluacion from "@/shared/Hooks/useAxiosEvaluacion";
import useClienteAxios from "../../../shared/Hooks/useClienteAxios";

export const useEnunciadoService = () => {
    const axios = useClienteAxios();
    //consulta SWR

    const FetchEnunciados = () => {
        const fetcher = () => axios.get("/v1/enunciados").then(data => data.data);
        const { data, error, isLoading, mutate } = useSWR("enunciados", fetcher, configSWR);
        return { data, error, isLoading, mutate }
    };
    const registrarEnunciado = async (data) => {
        try {
            const response = await axios.post(`/v1/enunciados`, data);
            return response.data;
        } catch (error) {
            return error.response.data;
        }
    };
    const actualizarEnunciado = async (id, data) => {
        try {
            const response = await axios.put(`/v1/enunciados/${id}`, data);
            return response.data;
        } catch (error) {
            return error.response.data;
        }
    };
    const eliminarEnunciado = async (id, data) => {
        try {
            const response = await axios.delete(`/v1/enunciados/${id}`, data);
            return response.data;
        } catch (error) {
            return error.response.data;
        }
    };

    return {
        FetchEnunciados,
        registrarEnunciado,
        actualizarEnunciado,
        eliminarEnunciado
    }
}