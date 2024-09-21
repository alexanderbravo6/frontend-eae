'use client'
import { createContext, useContext, useState } from "react"
import { signOut, useSession } from 'next-auth/react';
export const GlobalContext = createContext();

export const useGlobal = () => {
    const context = useContext(GlobalContext);
    if (!context) {
        throw new Error('useGlobal debe estar dentro del proveedor GlobalContext');
    }
    return context;
}


const GlobalProvider = ({ children }) => {
    const handleClickCerrarSesion = () => {
        console.log('ggf')
        signOut();
    }
    return (
        <GlobalContext.Provider value={{
            handleClickCerrarSesion

        }}>
            {children}
        </GlobalContext.Provider>
    )
}
export {
    GlobalProvider
}
export default GlobalContext