'use client'
import { createContext, useContext, useState } from 'react';

const ResultadoNacionalContext = createContext();

export function useResultadoNacional() {
    return useContext(ResultadoNacionalContext);
}

export function ResultadoNacionalProvider({ children }) {

    return (
        <ResultadoNacionalContext.Provider value={{

        }}>
            {children}
        </ResultadoNacionalContext.Provider>
    );
}
