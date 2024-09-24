'use client'
import { createContext, useContext, useState } from 'react';
import { usePruebaService } from '../Hooks/usePruebaService';

const PruebaContext = createContext();

export const usePrueba = () => {
    const context = useContext(PruebaContext);

    if (!context) {
        throw new Error('usePrueba debe estar dentro del proveedor PruebaContext');
    }
    return context;
};

export function PruebaProvider({ children }) {

    const { FetchUtilsPruebas } = usePruebaService()
    const utils = FetchUtilsPruebas()

    return (
        <PruebaContext.Provider value={{
            utils

        }}>
            {children}
        </PruebaContext.Provider>
    );
}
