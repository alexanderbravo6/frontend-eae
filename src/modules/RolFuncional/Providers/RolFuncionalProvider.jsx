'use client'
import { createContext, useContext, useState } from 'react';

const BaseContext = createContext();

export function useBase() {
    return useContext(BaseContext);
}

export function BaseProvider({ children }) {

    return (
        <BaseContext.Provider value={{

        }}>
            {children}
        </BaseContext.Provider>
    );
}
