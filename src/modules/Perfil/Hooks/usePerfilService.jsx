import { configSWR } from "@/shared/Constants/GlobalConstants";

import useSWR from "swr";
import useClienteAxios from "@/shared/Hooks/useClienteAxios";

export const usePerfilService = () => {
    const axios = useClienteAxios();

    const FetchPerfil = ($idPersona) => {

        //consulta SWR
        const fetcher = () => axios.get("/v1/persona/" + $idPersona).then(data => data.data);
        const { data, error, isLoading, mutate } = useSWR("informacion_persona_" + $idPersona, fetcher, configSWR);
        return { data, error, isLoading, mutate }
    }


    const actualizarPerfil = async (data, idPersona) => {
        try {
            const response = await axios.put("/v1/persona/" + idPersona, data);
            return response.data;
        } catch (error) {
            return error.response.data
        }

    };


    return { actualizarPerfil, FetchPerfil };


}