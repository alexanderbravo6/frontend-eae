
import useSWR from "swr";
import { configSWR } from "@/shared/Constants/GlobalConstants";
import useAxiosEvaluacion from "@/shared/Hooks/useAxiosEvaluacion";
import useClienteAxios from "../../../shared/Hooks/useClienteAxios";

export const useIndicacionService = () => {
    const axios = useClienteAxios();
    //consulta SWR

    const FetchIndicaciones = () => {
        const fetcher = () => axios.get("/v1/indicaciones").then(data => data.data);
        const { data, error, isLoading, mutate } = useSWR("indicaciones", fetcher, configSWR);
        return { data, error, isLoading, mutate }
    };
    const registrarIndicacion = async (data) => {
        try {
            const response = await axios.post(`/v1/indicaciones`, data);
            return response.data;
        } catch (error) {
            return error.response.data;
        }
    };
    const actualizarIndicacion = async (id, data) => {
        try {
            const response = await axios.put(`/v1/indicaciones/${id}`, data);
            return response.data;
        } catch (error) {
            return error.response.data;
        }
    };
    const eliminarIndicacion = async (id, data) => {
        try {
            const response = await axios.delete(`/v1/indicaciones/${id}`, data);
            return response.data;
        } catch (error) {
            return error.response.data;
        }
    };

    return {
        FetchIndicaciones,
        registrarIndicacion,
        actualizarIndicacion,
        eliminarIndicacion
    }
}