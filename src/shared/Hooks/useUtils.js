import useSWR from "swr";
import useClienteAxios from "./useClienteAxios";
import { configSWR } from "../Constants/GlobalConstants";
import { useGlobal } from "../Providers/GlobalProvider";
import { useSession } from "next-auth/react";


export const useUtils = () => {
    const axios = useClienteAxios();
    const ValidarPermisos = (codigoMenu, codigoAccion) => {
        const { accesoActual } = useGlobal();
        const accesoPermitido = accesoActual[0]?.menus.filter(permiso => permiso?.codigo === codigoMenu);
        const validarAcceso = accesoPermitido[0]?.acciones?.filter(accion => accion?.codigo === codigoAccion).length > 0;
        return validarAcceso
    }
    const FetchAllRoles = () => {
        const fetcher = () => axios.get("/v1/rol-funcional").then(data => data.data);
        const { data, error, isLoading, mutate } = useSWR("roles_funcionales", fetcher, configSWR);
        return { data, error, isLoading, mutate }
    }
    const FetchAllSedes = () => {
        const fetcher = () => axios.get("/v1/sede").then(data => data.data);
        const { data, error, isLoading, mutate } = useSWR("sedes", fetcher, configSWR);
        return { data, error, isLoading, mutate }
    }
    const FetchAllRegiones = () => {
        const fetcher = () => axios.get("/v1/region").then(data => data.data);
        const { data, error, isLoading, mutate } = useSWR("regiones", fetcher, configSWR);
        return { data, error, isLoading, mutate }
    }

    const FetchInstitucionesByRegion = (idRegion) => {
        const fetcher = () => axios.get(`/v1/region/${idRegion}/instituciones`).then(data => data.data);
        const { data, error, isLoading, mutate } = useSWR(`instituciones_region_${idRegion}`, fetcher, configSWR);
        return { data, error, isLoading, mutate }
    }
    const FetchAllInstituciones = () => {
        const fetcher = () => axios.get("/v1/institucion").then(data => data.data);
        const { data, error, isLoading, mutate } = useSWR("instituciones", fetcher, configSWR);
        return { data, error, isLoading, mutate }
    }

    const FetchAllTipoSedes = () => {

        //consulta SWR
        const fetcher = () => axios.get("/v1/tipo-sede").then(data => data.data);
        const { data, error, isLoading, mutate } = useSWR("tipo_sedes", fetcher, configSWR);
        return { data, error, isLoading, mutate }
    }
    const FetchCursosByPlanEstudio = (idCiclo, idPlanEstudio) => {

        //consulta SWR
        const fetcher = () => axios.get(`/v1/plan-estudio/cursos`, { params: { idCiclo, idPlanEstudio } }).then(data => data.data);
        const { data, error, isLoading, mutate } = useSWR(`plan_estudio_cursos_${idCiclo}_${idPlanEstudio}`, fetcher, configSWR);
        return { data, error, isLoading, mutate }
    }

    const FetchAllEspecialidades = (id) => {

        //consulta SWR
        const fetcher = () => axios.get(`/v1/especialidades`).then(data => data.data);
        const { data, error, isLoading, mutate } = useSWR("especialidades", fetcher, configSWR);
        return { data, error, isLoading, mutate }
    }
    const FetchInstitucionesResultados = (page, query = {}) => {
        const { data: session } = useSession();
        const idRol = session?.user?.idRol;

        // Evita mutaciones directas al objeto query
        const queryParams = { ...query };
        if (idRol === 3) {
            queryParams.idInstitucion = session?.user?.idInstitucionActiva;
        }

        const fetcher = () =>
            axios
                .get("/v1/institucion/resultados", { params: { page, ...queryParams } })
                .then(response => response.data);

        const { data, error, isLoading, mutate } = useSWR(
            `institucion_${page}_${JSON.stringify(queryParams)}`,
            fetcher,
            configSWR
        );

        return { data, error, isLoading, mutate };
    };

    const FetchRegionesResultados = (page, query) => {
        const { data: session } = useSession();
        const idRol = session?.user?.idRol;

        // Evita mutaciones directas al objeto query
        const queryParams = { ...query };
        if (idRol === 5) {
            queryParams.idRegion = session?.user?.idSede;
        }

        const fetcher = () => axios.get("/v1/region/resultados", { params: { page, ...queryParams } }).then(response => response.data);
        const { data, error, isLoading, mutate } = useSWR(`region_${page}_${JSON.stringify(queryParams)}`, fetcher, configSWR);
        return { data, error, isLoading, mutate }
    }

    return { FetchInstitucionesByRegion, FetchRegionesResultados, FetchInstitucionesResultados, ValidarPermisos, FetchAllInstituciones, FetchAllEspecialidades, FetchCursosByPlanEstudio, FetchAllRegiones, FetchAllRoles, FetchAllSedes, FetchAllTipoSedes }
}