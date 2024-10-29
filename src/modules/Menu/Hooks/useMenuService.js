

import useSWR from "swr";
import { configSWR } from "@/shared/Constants/GlobalConstants";
import useClienteAxios from "../../../shared/Hooks/useClienteAxios";

export const useMenuService = () => {
    const axios = useClienteAxios();
    //consulta SWR
    const registrarMenu = async (data) => {
        try {
            const response = await axios.post('/v1/menu', data);
            return response.data;
        } catch (error) {
            return error.response.data;
        }
    };
    const eliminarMenu = async (idMenu) => {
        try {
            const response = await axios.delete("/v1/menu/" + idMenu);
            return response.data;
        } catch (error) {
            return error.response.data;
        }
    };
    const actualizarMenu = async (idMenu, data) => {
        try {
            const response = await axios.put('/v1/menu/' + idMenu, data);
            return response.data;
        } catch (error) {
            return error.response.data;
        }
    };
    const FetchMenus = () => {
        const fetcher = () => axios.get("/v1/menu").then(data => data.data);
        const { data, error, isLoading, mutate } = useSWR("menu", fetcher, configSWR);
        return { data, error, isLoading, mutate }
    };
    const FetchMenusPadres = () => {
        const fetcher = () => axios.get("/v1/menu/padres").then(data => data.data);
        const { data, error, isLoading, mutate } = useSWR("menus_padres", fetcher, configSWR);
        return { data, error, isLoading, mutate }
    };

    return {
        FetchMenusPadres,
        FetchMenus,
        registrarMenu,
        eliminarMenu,
        actualizarMenu
    }
}