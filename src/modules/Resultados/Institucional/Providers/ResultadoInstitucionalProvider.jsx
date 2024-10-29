'use client'
import { createContext, useContext, useState } from 'react';

const ResultadoInstitucionalContext = createContext();

export function useResultadoInstitucional() {
    return useContext(ResultadoInstitucionalContext);
}

export function ResultadoInstitucionalProvider({ children }) {
    const [formValues, setFormValues] = useState({
        idInstitucion: '',
        idRegion: '',
        codigoModular: '',
        nombre: '',
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
            idInstitucion: '',
            idRegion: '',
            codigoModular: '',
            nombre: '',
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
        <ResultadoInstitucionalContext.Provider value={{
            query,
            pagination,
            handleCleanSearch,
            setPagination,
            formValues,
            handleInputChange,
            handleSearch,
        }}>
            {children}
        </ResultadoInstitucionalContext.Provider>
    );
}
