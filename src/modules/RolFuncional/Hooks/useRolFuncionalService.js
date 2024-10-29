
import useSWR from "swr";
import { configSWR } from "@/shared/Constants/GlobalConstants";
import useClienteAxios from "../../../shared/Hooks/useClienteAxios";

export const useRolFuncionalService = () => {
    const axios = useClienteAxios();
    //consulta SWR

    const FetchRolFuncional = () => {
        const fetcher = () => axios.get("/v1/rol-funcional").then(data => data.data);
        const { data, error, isLoading, mutate } = useSWR("rol_funcional", fetcher, configSWR);
        return { data, error, isLoading, mutate }
    };
    const FetchPermisos = (idRolFuncional) => {
        const fetcher = () => axios.get(`/v1/rol-funcional/${idRolFuncional}/permisos`).then(data => data.data);
        const { data, error, isLoading, mutate } = useSWR(`rol_funcional_permisos_${idRolFuncional}`, fetcher, configSWR);
        return { data, error, isLoading, mutate }
    };
    const registrarRolFuncional = async (data) => {
        try {
            const response = await axios.post(`/v1/rol-funcional`, data);
            return response.data;
        } catch (error) {
            return error.response.data;
        }
    };
    const actualizarRolFuncional = async (id, data) => {
        try {
            const response = await axios.put(`/v1/rol-funcional/${id}`, data);
            return response.data;
        } catch (error) {
            return error.response.data;
        }
    };
    const asignarPermisos = async (id, data) => {
        try {
            const response = await axios.put(`/v1/rol-funcional/${id}/asignar-permisos`, data);
            return response.data;
        } catch (error) {
            return error.response.data;
        }
    };
    const eliminarRolFuncional = async (id, data) => {
        try {
            const response = await axios.delete(`/v1/rol-funcional/${id}`, data);
            return response.data;
        } catch (error) {
            return error.response.data;
        }
    };

    return {
        asignarPermisos,
        FetchPermisos,
        FetchRolFuncional,
        registrarRolFuncional,
        actualizarRolFuncional,
        eliminarRolFuncional
    }
}