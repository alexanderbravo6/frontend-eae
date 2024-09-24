
import useSWR from "swr";
import useClienteAxios from "@/shared/Hooks/useClienteAxios";
import { configSWR } from "@/shared/Constants/GlobalConstants";


export const usePruebaService = () => {
    const axios = useClienteAxios();

    const eliminarPrueba = async (id) => {
        try {
            const response = await axios.delete("/v1/pruebas/" + id);
            return response.data;
        } catch (error) {
            return error.response.data;
        }
    };

    const actualizarPrueba = async (id, data) => {
        try {
            const response = await axios.put('/v1/pruebas/' + id, data);
            return response.data;
        } catch (error) {
            return error.response.data;
        }
    };
    const registrarPrueba = async (data) => {
        try {
            const response = await axios.post('/v1/pruebas', data);
            return response.data;
        } catch (error) {
            return error.response.data;
        }
    };
    const FetchUtilsPruebas = () => {

        const fetcher = () => axios.get("/v1/pruebas/utils").then(response => response.data);
        const { data, error, isLoading, mutate } = useSWR(`prueba_utils`, fetcher, configSWR);
        return { data, error, isLoading, mutate }
    }

    const FetchPruebas = (anio) => {

        const fetcher = () => axios.get("/v1/pruebas", {
            params: { anio }
        }).then(response => response.data);
        const { data, error, isLoading, mutate } = useSWR(`pruebas_${anio}`, fetcher, configSWR);
        return { data, error, isLoading, mutate }
    }

    return { FetchUtilsPruebas, actualizarPrueba, eliminarPrueba, registrarPrueba, FetchPruebas };


}