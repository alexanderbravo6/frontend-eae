
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
    const eliminarCortePrueba = async (id) => {
        try {
            const response = await axios.delete("/v1/pruebas/nivel-desempenio/cortes-puntajes/" + id);
            return response.data;
        } catch (error) {
            return error.response.data;
        }
    };
    const eliminarDescripcionNivelDesempenio = async (id) => {
        try {
            const response = await axios.delete("/v1/pruebas/nivel-desempenio/descripcion/" + id);
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
    const actualizarDescripcion = async (id, data) => {
        try {
            const response = await axios.put('/v1/pruebas/nivel-desempenio/descripcion/' + id, data);
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
    const registrarCortePuntaje = async (data) => {
        try {
            const response = await axios.post('/v1/pruebas/nivel-desempenio/cortes-puntajes', data);
            return response.data;
        } catch (error) {
            return error.response.data;
        }
    };
    const registrarDescripcion = async (data) => {
        try {
            const response = await axios.post('/v1/pruebas/nivel-desempenio/descripcion', data);
            return response.data;
        } catch (error) {
            return error.response.data;
        }
    };
    const FetchCortesPuntajes = (id) => {

        const fetcher = () => axios.get(`/v1/pruebas/${id}/nivel-desempenio/cortes-puntajes`).then(response => response.data);
        const { data, error, isLoading, mutate } = useSWR(`listado_cortes_puntajes_${id}`, fetcher, configSWR);
        return { data, error, isLoading, mutate }
    }
    const FetchDescripcionNivelDesempenio = (id) => {

        const fetcher = () => axios.get(`/v1/pruebas/${id}/nivel-desempenio/descripciones`).then(response => response.data);
        const { data, error, isLoading, mutate } = useSWR(`listado_descripcion_nivel_desempenio_${id}`, fetcher, configSWR);
        return { data, error, isLoading, mutate }
    }
    const FetchUtilsPruebas = () => {

        const fetcher = () => axios.get("/v1/pruebas/utils").then(response => response.data);
        const { data, error, isLoading, mutate } = useSWR(`prueba_utils`, fetcher, configSWR);
        return { data, error, isLoading, mutate }
    }
    const DescargarResultados = (idPrueba) => {

        const fetcher = () => axios.get("/v1/pruebas/resultados", { params: { idPrueba } }, { responseType: "blob" }).then(response => response.data);
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

    return { actualizarDescripcion, registrarDescripcion, eliminarDescripcionNivelDesempenio, eliminarCortePrueba, registrarCortePuntaje, FetchUtilsPruebas, FetchDescripcionNivelDesempenio, FetchCortesPuntajes, DescargarResultados, actualizarPrueba, eliminarPrueba, registrarPrueba, FetchPruebas };


}