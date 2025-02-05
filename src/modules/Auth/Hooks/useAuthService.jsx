
import useSWR from "swr";
import useClienteAxios from "@/shared/Hooks/useClienteAxios";
import { configSWR } from "@/shared/Constants/GlobalConstants";
import useAxiosRecuperarClave from "@/shared/Hooks/useAxiosRecuperarClave";


export const useAuthService = () => {
    const axios = useClienteAxios();

    const ValidarEstudiante = (dni) => {
        const fetcher = () => axios.get(`/v1/auth/persona/validar/${dni}`).then(data => data.data);
        const { data, error, isLoading, mutate } = useSWR(`estudiante_${dni}`,
            dni ? fetcher : null
            , configSWR);
        return { data, error, isLoading, mutate }
    };

    const registrarEstudiante = async (data) => {
        try {
            const response = await axios.post('/v1/auth/estudiante', data);
            return response.data;
        } catch (error) {
            return error.response.data;
        }
    };
    const solicitarRecuperarClave = async (data) => {
        try {
            const response = await axios.post('/v1/auth/solicitar-clave', data);
            return response.data;
        } catch (error) {
            return error.response.data;
        }
    };

    const CambiarClave = async (data, token = null) => {
        const axiosRecuperarClave = useAxiosRecuperarClave(token);
        try {
            const response = await axiosRecuperarClave.post('/v1/auth/cambiar-clave', data);
            return response.data;
        } catch (error) {
            return error.response.data;
        }
    };


    return { CambiarClave, solicitarRecuperarClave, registrarEstudiante, ValidarEstudiante };


}