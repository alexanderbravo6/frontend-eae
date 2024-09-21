'use client'
import { createContext, useContext, useState } from 'react';
import { useMatriculaService } from '../Hooks/useMatriculaService';

const MatriculaContext = createContext();

export const useMatricula = () => {
    const context = useContext(MatriculaContext);

    if (!context) {
        throw new Error('useMatricula debe estar dentro del proveedor MatriculaContext');
    }
    return context;
};

export function MatriculaProvider({ children }) {
    // Estado para manejar los valores del formulario
    const [formValues, setFormValues] = useState({
        numeroDocumento: '',
        primerApellido: '',
        segundoApellido: '',
        idEspecialidad: '',
        idCiclo: '',
        idPeriodoAcademico: ''
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
            idCiclo: '',
            idPeriodoAcademico: ''
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
        <MatriculaContext.Provider value={{
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
        </MatriculaContext.Provider>
    );
}
