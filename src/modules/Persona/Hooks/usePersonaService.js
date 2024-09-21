
import useSWR from "swr";
import useClienteAxios from "@/shared/Hooks/useClienteAxios";
import { configSWR } from "@/shared/Constants/GlobalConstants";


export const usePersonaService = () => {
    const axios = useClienteAxios();

    const eliminarPersona = async (idPersona) => {
        try {
            const response = await axios.delete("/v1/persona/" + idPersona);
            return response.data;
        } catch (error) {
            return error.response.data;
        }
    };
    const eliminarRolAsignado = async (idPersona) => {
        try {
            const response = await axios.delete("/v1/persona/rol-funcional/" + idPersona);
            return response.data;
        } catch (error) {
            return error.response.data;
        }
    };
    const actualizarRolAsignado = async (idPersona, data) => {
        try {
            const response = await axios.put('/v1/persona/rol-funcional/' + idPersona, data);
            return response.data;
        } catch (error) {
            return error.response.data;
        }
    };
    const registrarPersona = async (data) => {
        try {
            const response = await axios.post('/v1/persona', data);
            return response.data;
        } catch (error) {
            return error.response.data;
        }
    };
    const asignarRol = async (data) => {
        try {
            const response = await axios.post('/v1/persona/rol-funcional/asignar', data);
            return response.data;
        } catch (error) {
            return error.response.data;
        }
    };
    const FetchAllPersonas = (page, query) => {

        const fetcher = () => axios.get("/v1/persona", { params: { page, ...query } }).then(response => response.data);
        const { data, error, isLoading, mutate } = useSWR(`personas_${page}_${JSON.stringify(query)}`, fetcher, configSWR);
        return { data, error, isLoading, mutate }
    }
    const FetchRolByPersona = (idPersona) => {

        //consulta SWR
        const fetcher = () => axios.get(`/v1/persona/${idPersona}/roles`).then(data => data.data);
        const { data, error, isLoading, mutate } = useSWR("roles_asignados_" + idPersona, fetcher, configSWR);
        return { data, error, isLoading, mutate }
    }

    return { actualizarRolAsignado, eliminarRolAsignado, eliminarPersona, asignarRol, registrarPersona, FetchAllPersonas, FetchRolByPersona };


}