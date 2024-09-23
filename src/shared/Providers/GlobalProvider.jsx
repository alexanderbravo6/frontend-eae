'use client'
import { createContext, useContext, useEffect, useState } from "react"
import { signOut, useSession } from 'next-auth/react';
import LoadingScreenMinedu from "../Components/LoadingScreenMinedu";
import useClienteAxios from "../Hooks/useClienteAxios";
import useSWR from "swr";
import { configSWR } from "../Constants/GlobalConstants";
export const GlobalContext = createContext();

export const useGlobal = () => {
    const context = useContext(GlobalContext);
    if (!context) {
        throw new Error('useGlobal debe estar dentro del proveedor GlobalContext');
    }
    return context;
}
const GlobalProvider = ({ children }) => {
    const axios = useClienteAxios();
    const { data: session } = useSession();

    const fetchPermisos = async () => {
        const response = await axios.get(session ? `/v1/auth/accesos/${session?.user?.idPersona}` : null);
        if (response.data.success === false) {
            return null;
        } else {
            return response.data.data;
        }
    }
    const { data: accesos, error, isLoading } = useSWR("accesos_" + session?.user?.idPersona, fetchPermisos, configSWR);


    const handleClickCerrarSesion = () => {

        signOut();
    }

    if (!accesos && !error && isLoading) {
        return <LoadingScreenMinedu />;
    }
    const accesoActual = accesos?.filter((acceso) => acceso.idPersonaRol === session?.user.idPersonaRol)
    return (
        <GlobalContext.Provider value={{
            handleClickCerrarSesion,
            accesoActual,
        }}>
            {children}
        </GlobalContext.Provider>
    )
}
export {
    GlobalProvider
}
export default GlobalContext