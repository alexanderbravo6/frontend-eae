'use client'
import { createContext, useContext, useState } from 'react';

const ResultadoRegionalContext = createContext();

export function useResultadoRegional() {
    return useContext(ResultadoRegionalContext);
}

export function ResultadoRegionalProvider({ children }) {
    const [formValues, setFormValues] = useState({

        idRegion: '',

    });
    const [pagination, setPagination] = useState({ pageIndex: 0, pageSize: 10 })
    const [query, setQuery] = useState('');
    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormValues((prevValues) => ({
            ...prevValues,
            [id]: value.toUpperCase() // Convertir a mayúsculas
        }));
    };
    const handleCleanSearch = () => {
        setFormValues({

            idRegion: '',

        });
        setPagination({ pageIndex: 0, pageSize: 10 });
        setQuery('');
    };
    // Función para manejar el evento de búsqueda
    const handleSearch = () => {

        // Crear un objeto solo con los campos que no están vacíos
        const filteredValues = Object.entries(formValues)
            .filter(([key, value]) => value.trim() !== '') // Filtrar campos vacíos
            .reduce((acc, [key, value]) => {
                acc[key] = value;
                return acc;
            }, {});

        setPagination({ pageIndex: 0, pageSize: 10 });
        setQuery(filteredValues);

        // Aquí puedes enviar `filteredValues` al backend
    };
    return (
        <ResultadoRegionalContext.Provider value={{
            query,
            pagination,
            handleCleanSearch,
            setPagination,
            formValues,
            handleInputChange,
            handleSearch,
        }}>
            {children}
        </ResultadoRegionalContext.Provider>
    );
}
