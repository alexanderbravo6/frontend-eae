
import useSWR from "swr";
import useClienteAxios from "@/shared/Hooks/useClienteAxios";
import { configSWR } from "@/shared/Constants/GlobalConstants";
import { useSession } from "next-auth/react";


export const useResultadoEstudianteService = () => {
    const axios = useClienteAxios();


    const FetchResultadosEstudiantes = (page, query, anio) => {
        const { data: session } = useSession();
        const idRol = session?.user?.idRol;
        const idInstitucion = session?.user?.idInstitucionActiva;
        const queryParams = { ...query };
        if (idRol === 4) {
            queryParams.idPersona = session?.user?.idPersona;
        }
        if (idRol === 3) {
            queryParams.idInstitucion = idInstitucion;
        }
 
        const fetcher = () => axios.get("/v1/resultados/estudiantes", { params: { page, ...queryParams, anio } }).then(response => response.data);
        const { data, error, isLoading, mutate } = useSWR(`resultados_estudiantes_${page}_${JSON.stringify(queryParams)}_${anio}`, fetcher, configSWR);
        return { data, error, isLoading, mutate }
    }

    return { FetchResultadosEstudiantes };


}