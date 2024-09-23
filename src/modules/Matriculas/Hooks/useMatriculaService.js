
import useSWR from "swr";
import useClienteAxios from "@/shared/Hooks/useClienteAxios";
import { configSWR } from "@/shared/Constants/GlobalConstants";


export const useMatriculaService = () => {
    const axios = useClienteAxios();

    const eliminarMatricula = async (idMatricula) => {
        try {
            const response = await axios.delete("/v1/matriculas/" + idMatricula);
            return response.data;
        } catch (error) {
            return error.response.data;
        }
    };

    const actualizarMatricula = async (idPersona, data) => {
        try {
            const response = await axios.put('/v1/matriculas/' + idPersona, data);
            return response.data;
        } catch (error) {
            return error.response.data;
        }
    };
    const registrarMatricula = async (data) => {
        try {
            const response = await axios.post('/v1/matriculas', data);
            return response.data;
        } catch (error) {
            return error.response.data;
        }
    };
    const cargaMasiva = async (data) => {

        try {
            const response = await axios.post('/v1/matriculas/carga-masiva', data, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            return response.data;
        } catch (error) {
            return error.response.data;
        }
    };
    const FetchUtilsMatricula = () => {

        const fetcher = () => axios.get("/v1/matriculas/utils").then(response => response.data);
        const { data, error, isLoading, mutate } = useSWR(`matricula_utils`, fetcher, configSWR);
        return { data, error, isLoading, mutate }
    }
    const FecthMatriculas = (page, query) => {

        const fetcher = () => axios.get("/v1/matriculas", { params: { page, ...query } }).then(response => response.data);
        const { data, error, isLoading, mutate } = useSWR(`matriculas_${page}_${JSON.stringify(query)}`, fetcher, configSWR);
        return { data, error, isLoading, mutate }
    }

    return { actualizarMatricula, cargaMasiva, FetchUtilsMatricula, eliminarMatricula, registrarMatricula, FecthMatriculas };


}