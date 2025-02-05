// src/context/EvaluacionContext.js
'use client'
import { createContext, useContext, useEffect, useState } from 'react';
import { useEvaluacionService } from '../Hooks/useEvaluacionService';

import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';


const EvaluacionContext = createContext();

export function useEvaluacion() {
    const context = useContext(EvaluacionContext);
    if (!context) {
        throw new Error('use Evaluación debe estar dentro del proveedor');
    }
    return context;
}

export function EvaluacionProvider({ children }) {
    const router = useRouter();
    const [pruebaSelected, setPruebaSelected] = useState(null);
    const [matriculaSelected, setMatriculaSelected] = useState(null);
    const [preguntasSeguridad, setPreguntasSeguridad] = useState([]);
    const [estudianteEncontrado, setEstudianteEncontrado] = useState(false);
    const [errorValidation, setErrorValidation] = useState('');
    const [instrucciones, setInstrucciones] = useState(null);
    const [opcionSeleccionada, setOpcionSeleccionada] = useState(null);
    const [validationLoading, setValidationLoading] = useState(false);
    const [isLoadingClose, setIsLoadingClose] = useState(false);
    const [testParams, setTestParams] = useState(null);
    const { cerrarEvaluacion } = useEvaluacionService(testParams?.token);
    const handleLimpiarValidacion = () => {

        setEstudianteEncontrado(false);
        setPreguntasSeguridad([]);

    }

    const handleCerrarEvaluacion = async (token, idPregunta) => {
        setIsLoadingClose(true)

        const request = {
            idPregunta: idPregunta,
            respuesta: opcionSeleccionada
        }

        try {
            const response = await cerrarEvaluacion(token, request)

            if (response.success === true) {
                router.push(`/aplicacion/finalizado`)
            } else {

                if (response.errors) {
                    toast.error('Error al guardar respuesta')

                }
                if (response.validations) {
                    toast.error('Error en validación  al guardar respuesta')
                }
                setIsLoadingClose(false)
            }
        } catch (error) {
            toast.error('Error en el servidor')
            setIsLoadingClose(false)
            console.log(error)
        }
    }

    return (
        <EvaluacionContext.Provider value={{
            handleCerrarEvaluacion,
            setInstrucciones,
            instrucciones,
            isLoadingClose,
            setOpcionSeleccionada,
            opcionSeleccionada,
            setPruebaSelected,
            matriculaSelected,
            setMatriculaSelected,
            estudianteEncontrado,
            setEstudianteEncontrado,
            pruebaSelected,
            handleLimpiarValidacion,
            preguntasSeguridad,
            setPreguntasSeguridad,
            errorValidation,
            setErrorValidation,
            setValidationLoading,
            validationLoading,
            testParams,
            setTestParams
        }}>
            {children}
        </EvaluacionContext.Provider>
    );
}
