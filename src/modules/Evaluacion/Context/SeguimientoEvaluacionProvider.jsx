'use client'
import { useMatriculaService } from '@/modules/Matriculas/Hooks/useMatriculaService';
import { createContext, useContext, useState } from 'react';

const SeguimientoEvaluacionContext = createContext();

export const useSeguimientoEvaluacion = () => {
    const context = useContext(SeguimientoEvaluacionContext);

    if (!context) {
        throw new Error('useSeguimientoEvaluacion debe estar dentro del proveedor SeguimientoEvaluacionContext');
    }
    return context;
};

export function SeguimientoEvaluacionProvider({ children }) {
    // Estado para manejar los valores del formulario
    const [formValues, setFormValues] = useState({
        numeroDocumento: '',
        primerApellido: '',
        segundoApellido: '',
        nombres: '',
        idEspecialidad: '',
        idCiclo: '',
        idPeriodoAcademico: '',
        idInstitucion: ''
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
            nombres: '',
            idEspecialidad: '',
            idCiclo: '',
            idPeriodoAcademico: '',
            idInstitucion: ''
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
        <SeguimientoEvaluacionContext.Provider value={{
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
        </SeguimientoEvaluacionContext.Provider>
    );
}
