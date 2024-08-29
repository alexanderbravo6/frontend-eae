import { configSWR } from "@/shared/Constants/GlobalConstants";

import useSWR from "swr";
import useClienteAxios from "@/shared/Hooks/useClienteAxios";

export const useFetchMenuByRol = (idRolFuncional) => {
    const axios = useClienteAxios();
    //consulta SWR
    const fetcher = () => axios.get("/v1/menu/rol/" + idRolFuncional).then(data => data.data);
    const { data, error, isLoading, mutate } = useSWR("menu_rol_" + idRolFuncional, fetcher, configSWR);
    return { data, error, isLoading, mutate }
}