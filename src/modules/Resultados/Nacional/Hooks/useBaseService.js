
import useSWR from "swr";
import { configSWR } from "@/shared/Constants/GlobalConstants";
import useAxiosEvaluacion from "@/shared/Hooks/useAxiosEvaluacion";
import useClienteAxios from "../../../shared/Hooks/useClienteAxios";

export const useBaseService = () => {
    const axios = useClienteAxios();
    //consulta SWR

    const FetchBases = () => {
        const fetcher = () => axios.get("/v1/bases").then(data => data.data);
        const { data, error, isLoading, mutate } = useSWR("bases", fetcher, configSWR);
        return { data, error, isLoading, mutate }
    };
    const registrarBase = async (data) => {
        try {
            const response = await axios.post(`/v1/bases`, data);
            return response.data;
        } catch (error) {
            return error.response.data;
        }
    };
    const actualizarBase = async (id, data) => {
        try {
            const response = await axios.put(`/v1/bases/${id}`, data);
            return response.data;
        } catch (error) {
            return error.response.data;
        }
    };
    const eliminarBase = async (id, data) => {
        try {
            const response = await axios.delete(`/v1/bases/${id}`, data);
            return response.data;
        } catch (error) {
            return error.response.data;
        }
    };

    return {
        FetchBases,
        registrarBase,
        actualizarBase,
        eliminarBase
    }
}