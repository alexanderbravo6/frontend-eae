
import useSWR from "swr";
import useClienteAxios from "@/shared/Hooks/useClienteAxios";
import { configSWR } from "@/shared/Constants/GlobalConstants";


export const usePruebaService = () => {
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


    const FetchPruebas = (anio) => {

        const fetcher = () => axios.get("/v1/pruebas", {
            params: { anio }
        }).then(response => response.data);
        const { data, error, isLoading, mutate } = useSWR(`pruebas_${anio}`, fetcher, configSWR);
        return { data, error, isLoading, mutate }
    }

    return { actualizarMatricula, eliminarMatricula, registrarMatricula, FetchPruebas };


}