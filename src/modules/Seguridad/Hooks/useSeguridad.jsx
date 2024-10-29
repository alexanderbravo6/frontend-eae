import { configSWR } from "@/shared/Constants/GlobalConstants";

import useSWR from "swr";
import useClienteAxios from "@/shared/Hooks/useClienteAxios";

export const useFetchRoles = ($idPersona) => {
    const axios = useClienteAxios();
    //consulta SWR
    const fetcher = () => axios.get("/v1/persona/" + $idPersona + "/roles").then(data => data.data);
    const { data, error, isLoading, mutate } = useSWR("roles_persona_" + $idPersona, fetcher, configSWR);
    return { data, error, isLoading, mutate }
}