'use client'
import { useMatriculaService } from '@/modules/Matriculas/Hooks/useMatriculaService';
import { useSession } from 'next-auth/react';
import { createContext, useContext, useState } from 'react';

const ResultadoEstudianteContext = createContext();

export function useResultadoEstudiante() {
    return useContext(ResultadoEstudianteContext);
}

export function ResultadoEstudianteProvider({ children }) {

    // Estado para manejar los valores del formulario
    const [formValues, setFormValues] = useState({
        numeroDocumento: '',
        primerApellido: '',
        segundoApellido: '',
        idEspecialidad: '',
 
    });
    const [pagination, setPagination] = useState({ pageIndex: 0, pageSize: 10 })
    const [query, setQuery] = useState('');
    // Función para manejar cambios en los inputs
    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormValues((prevValues) => ({
            ...prevValues,
            [id]: value.toUpperCase() // Convertir a mayúsculas
        }));
    };
    const handleCleanSearch = () => {
        setFormValues({
            numeroDocumento: '',
            primerApellido: '',
            segundoApellido: '',
            idEspecialidad: '',

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
    const { FetchUtilsMatricula } = useMatriculaService()
    const utils = FetchUtilsMatricula()

    return (
        <ResultadoEstudianteContext.Provider value={{
            utils,
            query,
            handleCleanSearch,
            pagination,
            setPagination,
            formValues,
            handleInputChange,
            handleSearch
        }}>
            {children}
        </ResultadoEstudianteContext.Provider>
    );
}
